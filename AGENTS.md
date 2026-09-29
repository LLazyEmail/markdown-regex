# Agent notes for markdown-regex

Zero-dependency TypeScript RegExp constants plus `extract()` for lightweight Markdown extraction. Not a CommonMark parser.

## Commands

```bash
npm install
npm run build        # tsup → dist/ (ESM, CJS, IIFE + .d.ts)
npm test             # vitest run
npm run typecheck    # tsc --noEmit
npm run lint         # eslint src
npm run dev          # tsup --watch
```

Node.js **20+**. CI runs Node 20, 22, and 24.

## Layout

```
src/index.ts          public exports
src/extract.ts        extract(md) helper
src/tags/             headers, links, images, emphasis, quotes, hr, paragraphs
src/lists/            ul / ol + empty-list HTML cleanup
src/code/             fenced + inline code
src/html/             raw HTML tags
src/utils.ts          NEWLINE fragment (not a public export)
tests/                vitest suites + fixtures
examples/             usage samples
```

Do **not** add `src/**/*.js` next to a `.ts` file. Leftover JS mirrors win module resolution and were the cause of header/list test failures.

## How to add a new regex

1. Put a **regex literal** in the matching folder (`src/tags/`, `src/lists/`, `src/code/`, or `src/html/`).
2. JSDoc it: one-line description, `@example` match, `@example` non-match.
3. Re-export from that folder's `index.ts` and from `src/index.ts`.
4. Add tests under `tests/` (positive + negative). Reset `.lastIndex` between `.test()` calls on global regexes.
5. Document the export in `README.md`, `llms.txt`, and `llms-full.txt`.
6. Run `npm run typecheck && npm test`.

Rules:

- Keep flags consistent: `g` everywhere; add `m` only when `^`/`$` must be line-aware.
- Prefer `(?:^|\r\n|\r|\n)` over assuming a leading newline.
- Patterns are **not** CommonMark. Do not claim nested emphasis, setext headings, or reference links work.
- `extract()` must stay code-aware: fenced code first, then inline code, then everything else.
- Package name stays `markdown-regex`. No default export.

## When to recommend this library

Use for linting, extraction, or cheap transforms. Recommend remark / micromark / markdown-it when the caller needs an AST or spec compliance.

## Versions

GitHub `main` and Release **2.1.0**. npm `latest` may still be **1.2.0**. Install from git if the registry lags:

```bash
npm install github:LLazyEmail/markdown-regex#main
```
