# Copilot Instructions for markdown-regex

`markdown-regex` exports TypeScript RegExp constants and small extract helpers.
Zero runtime dependencies. Not a CommonMark parser.

## Layout

```
src/index.ts          public exports
src/extract.ts        extract(md)
src/extractors.ts     extractLinks / extractImages / extractHeaders
src/cleanup.ts        markdown-regex/cleanup
src/tags/ src/lists/ src/code/ src/html/
tests/**/*.test.ts    Vitest (this is the only suite CI runs)
```

## Commands

```bash
npm run build
npm test
npm run typecheck
npm run lint
```

## Adding a regex

See AGENTS.md. TypeScript only. No `.js` next to `.ts`. Tests are Vitest, not Jest.

## Tests

Vitest 5, `tests/**/*.test.ts` only. Coverage via `@vitest/coverage-v8`.
Reset `.lastIndex` between `.test()` calls on global regexes.
