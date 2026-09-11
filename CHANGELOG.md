# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Renamed `REGEXP_EM` → `REGEXP_ITALIC` for clearer naming

### Removed
- `.gitpod.yml`
- `babel.config.js` (no longer needed with tsup)
- `tests/olga/` (duplicate / experimental)

## [2.0.0-beta.1] - 2026-09-11

### Changed (Breaking)
- Migrated entire source to **TypeScript**
- Replaced Rollup with **tsup** (simpler, faster, produces CJS + ESM + IIFE + .d.ts)
- Removed `os` dependency completely
- Newline handling is now platform-agnostic (`\n`, `\r\n` and `\r` all work)
- Modern `package.json` `exports` map
- Version bumped to 2.0 because of packaging and newline changes

### Added
- `tsconfig.json` with strict settings
- Clean modular TypeScript structure under `src/`
- Ready for future custom-tag addons

### Removed
- Rollup and related polyfill plugins
- Babel configuration (no longer needed)
- Runtime `os` dependency

## [1.2.0] - 2024-03-18

### Added
- Comprehensive test suites
- TypeScript definitions
- CONTRIBUTING.md, CHANGELOG.md, examples
- GitHub Actions CI

### Fixed
- Repository URL corrected to LLazyEmail/markdown-regex

## [1.1.0] - 2023-02-10

### Added
- Initial regex patterns
- Rollup build system
- MIT License

[Unreleased]: https://github.com/LLazyEmail/markdown-regex/compare/v2.0.0-beta.1...HEAD
[2.0.0-beta.1]: https://github.com/LLazyEmail/markdown-regex/compare/v1.2.0...v2.0.0-beta.1
[1.2.0]: https://github.com/LLazyEmail/markdown-regex/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LLazyEmail/markdown-regex/releases/tag/v1.1.0
