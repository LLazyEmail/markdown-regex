# Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

- Config: `config.json` — **fixed** group keeps `markdown-regex` and the private `@markdown-regex/*` packages on the same version.
- Add a fragment: `pnpm changeset` (or the **Add changeset** GitHub Action).
- On push to `main`, `changesets.yml` opens a **Version packages** PR while fragments are pending.
- When that PR merges (no fragments left), the same workflow runs `changeset git-tag`, pushes the `markdown-regex@<version>` tag, creates the GitHub Release from `CHANGELOG.md`, and dispatches `npm-publish.yml` for that tag.
- `npm-publish.yml` does the actual `pnpm publish --provenance` through npm trusted publishing (OIDC), so no `NPM_TOKEN` secret is needed. Releases created by `GITHUB_TOKEN` do not fire `release: published`, which is why the workflow is dispatched explicitly.

Private workspace packages are bundled into the public tarball; only `markdown-regex` is published to npm.
