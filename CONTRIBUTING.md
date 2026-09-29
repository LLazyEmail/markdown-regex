# Contributing to markdown-regex

## Setup

```bash
git clone https://github.com/LLazyEmail/markdown-regex.git
cd markdown-regex
npm install
```

## Commands

```bash
npm run build        # tsup → dist/
npm test             # vitest run (tests/**/*.test.ts)
npm run test:coverage
npm run typecheck
npm run lint
npm run dev          # tsup --watch
```

Node.js 20+. CI runs Node 20, 22, and 24.

## Adding a regex

Follow [AGENTS.md](./AGENTS.md). Short version:

1. Add a TypeScript regex literal under `src/tags/`, `src/lists/`, `src/code/`, or `src/html/`.
2. JSDoc it (match + non-match + capture groups).
3. Re-export from the folder index and `src/index.ts`.
4. Add a `tests/*.test.ts` file. Do not add Jest files.
5. Update `README.md` and `llms-full.txt`.

Do not put a `.js` mirror next to a `.ts` file.

## Tests

The live suite is **Vitest**. Only `tests/**/*.test.ts` is collected.
Leftover `tests/**/*.test.js` files are not part of CI.

## Pull requests

1. `npm test` and `npm run typecheck` pass.
2. New patterns have a match and a non-match test.
3. Open against `main`.
