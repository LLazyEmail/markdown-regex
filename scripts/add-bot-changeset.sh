#!/usr/bin/env bash
# Add a patch changeset for a Renovate or Dependabot dependency PR when
# the branch does not already have one. Exit 0 when there is nothing to do.
set -euo pipefail

BASE_REF="${BASE_REF:-origin/main}"
TITLE="${TITLE:-Dependency update}"
PR_NUMBER="${PR_NUMBER:-}"
COMMIT="${COMMIT:-0}"

if ! git rev-parse --verify "$BASE_REF" >/dev/null 2>&1; then
  echo "Base ref $BASE_REF is missing; fetch it first." >&2
  exit 1
fi

# New changeset fragments on this branch (ignore the folder docs / config).
existing="$(git diff --name-only --diff-filter=A "${BASE_REF}...HEAD" -- .changeset \
  | grep -E '\.md$' \
  | grep -vE '(^|/)README\.md$' \
  || true)"
if [ -n "$existing" ]; then
  echo "PR already has a changeset:"
  printf '%s\n' "$existing"
  exit 0
fi

changed="$(git diff --name-only "${BASE_REF}...HEAD")"
if ! printf '%s\n' "$changed" | grep -qE '(^|/)package\.json$|(^|/)pnpm-lock\.yaml$'; then
  echo "No package.json or pnpm-lock.yaml changes; skipping."
  exit 0
fi

# Skip packageManager-only PRs (pnpm version bumps). Lockfile-only
# dependency bumps still get a changeset.
only_package_manager="$(python3 - "$BASE_REF" << 'PY'
import json, subprocess, sys

base = sys.argv[1]
names = subprocess.check_output(
    ["git", "diff", "--name-only", f"{base}...HEAD"], text=True
).splitlines()

pkg_files = [n for n in names if n.endswith("package.json")]
lock_files = [n for n in names if n.endswith("pnpm-lock.yaml")]
dep_keys = {
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies",
    "overrides",
}

def parse(path, ref):
    try:
        raw = subprocess.check_output(["git", "show", f"{ref}:{path}"], text=True)
    except subprocess.CalledProcessError:
        return {}
    return json.loads(raw)

dep_changed = False
only_pm = True
saw_pkg = False
for path in pkg_files:
    saw_pkg = True
    old = parse(path, base)
    new = parse(path, "HEAD")
    keys = set(old) | set(new)
    for key in keys:
        if old.get(key) == new.get(key):
            continue
        if key == "packageManager":
            continue
        if key == "pnpm":
            old_p = old.get("pnpm") or {}
            new_p = new.get("pnpm") or {}
            if old_p.get("overrides") != new_p.get("overrides"):
                dep_changed = True
                only_pm = False
            # other pnpm config (never / allowed versions) is tooling
            continue
        if key in dep_keys:
            dep_changed = True
            only_pm = False
        else:
            only_pm = False

# Lockfile-only dependency bumps: no package.json change.
if not saw_pkg and lock_files:
    only_pm = False
    dep_changed = True

# packageManager (+ lockfile) and nothing else.
print("yes" if (saw_pkg and only_pm and not dep_changed) else "no")
PY
)"

if [ "$only_package_manager" = "yes" ]; then
  echo "Only packageManager changed; skipping changeset."
  exit 0
fi

mkdir -p .changeset
if [ -n "$PR_NUMBER" ]; then
  id="renovate-pr-${PR_NUMBER}"
  summary="${TITLE} (#${PR_NUMBER})"
else
  id="renovate-$(date -u +%Y%m%d%H%M%S)"
  summary="$TITLE"
fi
file=".changeset/${id}.md"

if [ -e "$file" ]; then
  echo "$file already exists; skipping."
  exit 0
fi

{
  echo "---"
  echo "\"markdown-regex\": patch"
  echo "---"
  echo ""
  printf '%s\n' "$summary"
  echo ""
} > "$file"

echo "Wrote $file:"
cat "$file"

if [ "$COMMIT" != "1" ]; then
  exit 0
fi

git add "$file"
if git diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi

git commit -m "chore: add patch changeset for dependency update

${summary}"
echo "Committed $file"
