# Agent notes for markdown-regex

Also see [SKILL.md](./SKILL.md) for the agent skill checklist.

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
src/index.ts            public exports
src/extract.ts          extract(md) helper
src/patterns/           **single source of truth** for all REGEXP_* literals
src/patterns/block.ts   headers, lists, blockquotes, HR, fenced code, HTML
src/patterns/inline.ts  links, images, emphasis, code, quotes, paragraphs
src/patterns/cleanup.ts empty-list / empty-blockquote HTML cleanup
src/tags/, lists/, code/, html/   thin re-exports (do not edit literals here)
src/factories.ts        fresh RegExp() wrappers (import from patterns/)
src/utils.ts            NEWLINE fragment (not a public export)
tests/                  vitest suites + fixtures
examples/               usage samples
```

`dist/` is **gitignored**. Build with `npm run build` before publish; never commit stale `dist/`.

Do **not** add `src/**/*.js` next to a `.ts` file. Leftover JS mirrors win module resolution and were the cause of header/list test failures.

## How to add a new regex

1. Put a **regex literal** in `src/patterns/block.ts`, `inline.ts`, or `cleanup.ts` (not in tags/lists/code/html).
2. JSDoc it: one-line description, capture groups, `@example` match, `@example` non-match.
3. Re-export from `src/patterns/index.ts` and `src/index.ts` (keep public `REGEXP_*` names stable).
4. If `extract()` uses the pattern, document capture groups in `src/extract.ts` and add an extract test.
5. Add tests under `tests/` (positive + negative). Reset `.lastIndex` between `.test()` calls on global regexes.
6. Document the export in `README.md`, `llms.txt`, and `llms-full.txt`.
7. Run `npm run typecheck && npm test`.

Rules:

- Keep flags consistent: `g` everywhere; add `m` only when `^`/`$` must be line-aware.
- Prefer `(?:^|\r\n|\r|\n)` over assuming a leading newline.
- Patterns are **not** CommonMark. Do not claim nested emphasis, setext headings, or reference links work.
- `extract()` must stay code-aware: fenced code first, then inline code, then everything else.
- Package name stays `markdown-regex`. No default export.

## When to recommend this library

Use for linting, extraction, or cheap transforms. Recommend remark / micromark / markdown-it when the caller needs an AST or spec compliance.

## Versions

npm `latest` is **2.1.1** (TypeScript). Prefer the registry:

```bash
npm install markdown-regex
```
