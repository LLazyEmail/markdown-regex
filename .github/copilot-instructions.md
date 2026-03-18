# Copilot Instructions for markdown-regex

## Project Overview

`markdown-regex` is a lightweight JavaScript library (~2 KB, zero runtime dependencies) that exports named RegExp constants for parsing and extracting elements from Markdown content. It supports CommonJS, ES Modules, and IIFE browser builds, and includes TypeScript definitions.

## Repository Structure

```
src/
  index.js          # Main entry point – re-exports all patterns
  index.d.ts        # TypeScript type definitions
  tags/             # Regex patterns for inline/block markdown tags
  lists/            # Regex patterns for ordered and unordered lists
  custom/           # Custom patterns
  chat/             # Chat-related patterns
  utils.js
tests/              # Jest test files mirroring the src/ layout
dist/               # Build output (generated, do not edit)
```

## Build, Test, and Lint Commands

| Purpose | Command |
|---|---|
| Build (clean + bundle) | `npm run build` |
| Run tests | `npm test` |
| Lint (check) | `npm run lint` |
| Lint (auto-fix) | `npm run lint:fix` |
| Format with Prettier | `npm run lint:prettier` |

Always run `npm test` and `npm run lint` before submitting a PR. Both must pass.

## Adding a New Regex Pattern

1. Create a new file under `src/tags/` or `src/lists/` (e.g., `src/tags/my-pattern.js`) that exports a named `REGEXP_*` constant.
2. Re-export the constant from the appropriate barrel file (`src/tags/index.js` or `src/lists/index.js`).
3. Re-export it from `src/index.js`.
4. Add the TypeScript declaration to `src/index.d.ts`.
5. Add a corresponding test file under `tests/tags/` or `tests/lists/` following the existing test conventions.
6. Update `readme.md` to document the new constant.
7. Add an entry to `CHANGELOG.md` under `[Unreleased]`.

## Code Style

- **Language**: ES Modules (`export`/`import`). Rollup handles CommonJS output.
- **Naming**: All exported regex constants must be named `REGEXP_*` in `SCREAMING_SNAKE_CASE`.
- **Line length**: Maximum 120 characters (enforced by ESLint).
- **Camel case**: Use camelCase for non-constant identifiers.
- **No unnecessary escapes**: The linter allows `no-useless-escape` and `no-control-regex` to be off for regex patterns.
- **Formatting**: Run `npm run lint:prettier` to auto-format source files.

## Testing

- Tests use **Jest 29** with ES module support (`NODE_OPTIONS=--experimental-vm-modules`).
- Test files live in `tests/` and mirror the `src/` directory structure.
- Coverage threshold is **70%** for branches, functions, lines, and statements.
- Each regex pattern should have tests for both **matching** and **non-matching** cases, and cover edge cases such as Windows (`\r\n`) vs Unix (`\n`) line endings.

## TypeScript

When adding or modifying exported constants, always update `src/index.d.ts` to keep the TypeScript definitions in sync.

## Pull Request Guidelines

- Reference the related GitHub issue in the PR description (`Closes #<issue>`).
- Ensure all checklist items in `.github/PULL_REQUEST_TEMPLATE.md` are completed.
- Keep changes focused; one logical change per PR.
