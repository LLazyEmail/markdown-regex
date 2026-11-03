# Changesets

Scaffold modelled on [LLazyEmail/generate-template](https://github.com/LLazyEmail/generate-template).

**This PR does not publish.** It only adds the config so future PRs can drop
markdown fragments under `.changeset/` and a follow-up workflow can open a
Version packages PR / provenance-signed npm publish (already present in
`.github/workflows/npm-publish.yml` on GitHub Release).

## How to record a change

```bash
npx changeset
```

Or add a file manually:

```md
---
"markdown-regex": patch
---

Describe the user-facing change.
```

## Follow-ups (not in this PR)

1. Add `@changesets/cli` as a devDependency.
2. Port `changesets.yml` / `add-changeset.yml` patterns from generate-template.
3. Keep `npm publish --provenance` (already on Release publish).
