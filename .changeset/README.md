# Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

- Config: `config.json` — **fixed** group keeps `markdown-regex` and the private `@markdown-regex/*` packages on the same version.
- Add a fragment: `pnpm changeset` (or the **Add changeset** GitHub Action).
- On push to `main`, `changesets.yml` opens a Version Packages PR (or publishes when that PR merges).

Private workspace packages are bundled into the public tarball; only `markdown-regex` is published to npm.
