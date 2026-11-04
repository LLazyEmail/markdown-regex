# Agent notes for markdown-regex

Also see [SKILL.md](./SKILL.md) for the agent skill checklist.

Zero-dependency TypeScript RegExp constants plus `extract()` for lightweight Markdown extraction. Not a CommonMark parser.

## Commands

```bash
pnpm install
pnpm run build           # tsup → dist/ (bundles private workspace packages)
pnpm test                # vitest run
pnpm run typecheck       # tsc --noEmit
pnpm run lint            # eslint
pnpm run turbo:build     # turbo run build (packages + root)
pnpm run turbo:test      # turbo run test
```

Node.js **20+**. Package manager: **pnpm** (workspaces). CI runs Node 20, 22, and 24.

## Layout

```
pnpm-workspace.yaml     root + packages/*
turbo.json              build/test/typecheck/lint pipeline
packages/core/          REGEXP_* + extract/factories (private)
packages/frontmatter/   YAML frontmatter pre-pass (private; stub → feature PR)
packages/blocks/        flat :::name containers (private; stub → feature PR)
packages/email/         email helpers (private; stub; nested remark = follow-up)
src/index.ts            public barrel (re-exports core)
src/cleanup.ts          markdown-regex/cleanup
src/frontmatter.ts      markdown-regex/frontmatter
src/blocks.ts           markdown-regex/blocks
src/email.ts            markdown-regex/email
src/cli.ts              bin entry
tests/                  vitest suites
```

Private `@markdown-regex/*` packages are **bundled** into the published `markdown-regex` tarball (`tsup` `noExternal`). Do not publish them separately.

`dist/` is **gitignored**. Build with `pnpm run build` before publish; never commit stale `dist/`.

Do **not** add `src/**/*.js` or `packages/*/src/**/*.js` next to a `.ts` file.

## How to add a new regex

1. Put a **regex literal** in `packages/core/src/patterns/block.ts`, `inline.ts`, or `cleanup.ts` (not in tags/lists/code/html re-exports).
2. JSDoc it: one-line description, capture groups, `@example` match, `@example` non-match.
3. Re-export from `packages/core/src/patterns/index.ts` and `packages/core/src/index.ts` (root `src/index.ts` re-exports core).
4. If `extract()` uses the pattern, document capture groups in `packages/core/src/extract.ts` and add an extract test.
5. Add tests under `tests/` (positive + negative). Reset `.lastIndex` between `.test()` calls on global regexes.
6. Document the export in `README.md`, `llms.txt`, and `llms-full.txt`.
7. Run `pnpm run typecheck && pnpm test`.

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
