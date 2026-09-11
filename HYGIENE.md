# Repo hygiene — files to delete after this branch merges

The GitHub API helper used for automation can create/update files but not reliably delete paths. Run this once on a clean checkout of this branch (or right after merge):

```bash
# Dead config
git rm -f rollup.config.mjs babel.config.js eslintrc.js jest.config.js 2>/dev/null || true

# Legacy flat / dual JS sources (TypeScript is canonical)
git rm -f src/index.js src/tags.js src/list.js src/utils.js src/_to-try.js src/index.d.ts 2>/dev/null || true
git rm -f src/tags/*.js src/lists/*.js 2>/dev/null || true
git rm -rf src/chat src/custom 2>/dev/null || true

# Old EM name
git rm -f src/tags/em.ts src/tags/em.js 2>/dev/null || true

# Old test sprawl (replaced by tests/*.test.ts)
git rm -rf tests/blockquote tests/br tests/code tests/del tests/em tests/empty-blockqoute \
  tests/empty-ol tests/empty-ul tests/fixtures tests/header tests/helpers tests/hr \
  tests/image tests/integration tests/link tests/lists tests/ol-list tests/olga \
  tests/paragraph tests/q tests/recipe tests/strong tests/tags tests/ul-list 2>/dev/null || true
git rm -f tests/*.test.js tests/edge-cases-advanced.test.js tests/header.test.js \
  tests/integration.test.js tests/list.test.js tests/tags.test.js tests/smoke.test.js 2>/dev/null || true

git commit -m "chore: delete legacy JS, dead config, and old test folders"
```

After deletion, only these test files should remain:

- `tests/exports.test.ts`
- `tests/patterns.test.ts`
- `tests/integration.test.ts`

Canonical source: `src/**/*.ts` only.
