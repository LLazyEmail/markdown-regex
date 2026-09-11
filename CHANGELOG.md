# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-09-11

### Changed (Breaking)
- Source rewritten in **TypeScript**; published builds via **tsup** (CJS + ESM + IIFE + `.d.ts`)
- Removed runtime **`os`** dependency; newline patterns accept `\n`, `\r\n`, and `\r`
- Renamed **`REGEXP_EM` → `REGEXP_ITALIC`**
- Modern `package.json` `exports` map; package `files` limited to `dist` + license/docs
- Tests collapsed to a small TypeScript suite (ts-jest against `src/`), including the real `source-fullcodetest.md` fixture

### Added
- Browser global build (`MarkdownRegex`)
- `engines.node: >=18`
- Publish workflow with provenance support

### Removed
- Rollup-based build and related polyfills
- Legacy dual JS entrypoints (TypeScript is canonical)

## [1.2.0] - 2024-03-18

### Added
- Tests, types, CONTRIBUTING, CHANGELOG, examples, CI

## [1.1.0] - 2023-02-10

### Added
- Initial regex patterns and Rollup build

[2.0.0]: https://github.com/LLazyEmail/markdown-regex/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/LLazyEmail/markdown-regex/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LLazyEmail/markdown-regex/releases/tag/v1.1.0
