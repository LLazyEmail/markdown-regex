# Changelog

## 2.2.0

### Minor Changes

- e0de542: Add flat `:::name` custom blocks on `markdown-regex/blocks` with fence-first extraction, a small rule registry for ordering, tests, and docs. Nested/email remark rendering is deferred.
- 5cbf40d: Add a zero-dependency YAML frontmatter pre-pass on `markdown-regex/frontmatter` (`parseFrontmatter`), with tests and docs.
- 4a19385: Adopt pnpm workspaces + Turborepo. Split private `@markdown-regex/{core,frontmatter,blocks,email}` packages (bundled into the public package) and add subpath exports `./frontmatter`, `./blocks`, and `./email` alongside `./cleanup`.

### Patch Changes

- 9f1b6cd: Scaffold changesets for changelog fragments and a future auto-version flow (no publish in this change).
- 3ad3775: Port Changesets release tooling from generate-template: `@changesets/cli`, Add changeset workflow with package selection, Version packages / publish workflow, and a fixed versioning group for `markdown-regex` + `@markdown-regex/*`.
- c1aaaa0: Extend CI with affected-only turbo filters (`--filter=...[origin/main]`), lint + typecheck, per-package coverage gates, Node 20/22/24 matrix, and turbo local/Actions caching (remote cache left as a commented option).
- e1d646c: Add a real-world fixture Vitest suite (`pnpm test:fixtures`) with automatic folder discovery under `fixtures/real-world/`, file snapshots for extract/frontmatter/blocks, and a separate Fixtures CI job (PR + nightly).
- 091df36: Consolidate all REGEXP_* literals into `src/patterns/` (tags/lists/code/html become re-exports), align `extract()` capture groups with italic/inline-code docs, and document that `dist/` stays gitignored.

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Renamed `REGEXP_EM` → `REGEXP_ITALIC` (breaking)
- Tests collapsed to a small TypeScript suite against `src/` via ts-jest

### Removed

- Legacy dual JS sources scheduled for deletion (see hygiene PR)
- Sprawl of per-tag test folders replaced by `tests/*.test.ts`

## [2.0.0-beta.1] - 2026-09-11

### Changed (Breaking)

- Migrated source to TypeScript
- Replaced Rollup with tsup
- Removed `os` dependency; newlines are platform-agnostic
- Modern `package.json` exports map

### Added

- tsup build (CJS + ESM + IIFE + dts)
- TypeScript strict config

## [1.2.0] - 2024-03-18

### Added

- Tests, types, CONTRIBUTING, CHANGELOG, examples, CI

## [1.1.0] - 2023-02-10

### Added

- Initial regex patterns and Rollup build

[Unreleased]: https://github.com/LLazyEmail/markdown-regex/compare/v2.0.0-beta.1...HEAD
[2.0.0-beta.1]: https://github.com/LLazyEmail/markdown-regex/compare/v1.2.0...v2.0.0-beta.1
[1.2.0]: https://github.com/LLazyEmail/markdown-regex/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LLazyEmail/markdown-regex/releases/tag/v1.1.0
