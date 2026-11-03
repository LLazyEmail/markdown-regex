---
name: markdown-regex
description: >-
  Use zero-dependency TypeScript RegExp patterns and extract helpers from
  markdown-regex to pull headers, links, images, lists, and code from Markdown.
  Prefer this for linting, scripts, and AI-agent tool calls that want JSON.
  Do not use it when you need a CommonMark AST — use remark, micromark, or
  markdown-it instead.
---

# markdown-regex skill

Lightweight Markdown **extraction** via RegExp constants and `extract*` helpers.
Not a CommonMark parser.

## Install

```bash
npm install markdown-regex
```

Node.js **20+**. Package is ESM + CJS, `sideEffects: false`, zero runtime dependencies.

## Prefer these APIs

```ts
import {
  extractLinks,
  extractImages,
  extractHeaders,
  extract,
} from 'markdown-regex';

extractLinks('[a](https://example.com)');
// [{ text: 'a', url: 'https://example.com' }]

extractImages('![alt](./x.png)');
// [{ alt: 'alt', url: './x.png' }]

extractHeaders('# Title\n## Section');
// [{ level: 1, text: 'Title' }, { level: 2, text: 'Section' }]

extract('# T\n\n[a](b)'); // structured ExtractResult (code-aware)
```

Raw constants (`REGEXP_LINK`, `REGEXP_HEADER`, …) are global (`g`). Reset
`.lastIndex` between `.test()` calls, or use `matchAll`. Prefer `extract*` so
fenced/inline code is stripped first.

HTML cleanup (empty `<ul>` / `<ol>` / `<blockquote>` after a Markdown→HTML pass):

```ts
import { REGEXP_EMPTY_UL } from 'markdown-regex/cleanup';
```

## Agent checklist

- [ ] Confirm the caller wants **extraction**, not rendering or an AST.
- [ ] Use `extractLinks` / `extractHeaders` / `extractImages` / `extract` before composing regexes.
- [ ] Do not claim nested emphasis, setext headings, or reference links work.
- [ ] Read [SECURITY.md](./SECURITY.md) for ReDoS; CI runs `tests/redos.test.ts`.
- [ ] Update [README.md](./README.md), [llms.txt](./llms.txt), and [llms-full.txt](./llms-full.txt) when adding exports.
- [ ] Run `npm run typecheck && npm test` after changes.

## Commands

```bash
npm install
npm run build
npm test
npm run typecheck
npm run lint
```

## Layout

See [AGENTS.md](./AGENTS.md). Public entry: [src/index.ts](./src/index.ts).

## MCP-shaped tool idea

Expose one tool, e.g. `markdown_extract`, with args `{ markdown: string, mode: 'links'|'headers'|'images'|'all' }` and return JSON from the matching `extract*` helper. Example sketch: [examples/mcp-tool-shape.ts](./examples/mcp-tool-shape.ts) (when present on the branch).
