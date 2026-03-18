# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2024-03-18

### Added
- Comprehensive test suites (`tests/tags.test.js`, `tests/list.test.js`, `tests/integration.test.js`)
- TypeScript definitions (`src/index.d.ts`) for all exported regex patterns
- `CONTRIBUTING.md` with development guidelines
- `CHANGELOG.md` for release history tracking
- `examples/basic-usage.js` demonstrating all major patterns
- GitHub Actions CI workflow (`test.yml`) for automated testing
- Code coverage thresholds in `jest.config.js`

### Fixed
- Repository URL in `package.json` corrected from `atherdon/markdown-regex` to `LLazyEmail/markdown-regex`
- Updated `bugs` and `homepage` URLs in `package.json`

### Changed
- Enhanced `README.md` with installation instructions, API reference table, and usage examples
- Updated `package.json` with `types`, `exports`, and proper metadata fields
- Optimized `.npmignore` to reduce published package size

## [1.1.0] - 2023-02-10

### Added
- Initial regex patterns for headers, images, links, strong, del, q, code, blockquote, hr, paragraph, br, empty-blockquote, em
- Unordered and ordered list patterns
- Rollup build system (CommonJS, ES module, IIFE outputs)
- ESLint and Prettier configuration
- MIT License

[Unreleased]: https://github.com/LLazyEmail/markdown-regex/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/LLazyEmail/markdown-regex/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LLazyEmail/markdown-regex/releases/tag/v1.1.0
