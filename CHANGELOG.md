# Changelog

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
