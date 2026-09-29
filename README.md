# markdown-regex

Zero-dependency, TypeScript-typed RegExp patterns for extracting headers, links, images, lists and code from Markdown.

[![NPM](https://nodei.co/npm/markdown-regex.png)](https://www.npmjs.com/package/markdown-regex)
[![npm version](https://badge.fury.io/js/markdown-regex.svg)](https://www.npmjs.com/package/markdown-regex)
[![Tests](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml/badge.svg)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Socket Badge](https://badge.socket.dev/npm/package/markdown-regex/)](https://badge.socket.dev/npm/package/markdown-regex/)

> **v2.1.0** is tagged and released on GitHub. The npm `latest` tag is still **1.2.0**. Treat v2 as a preview until an npm 2.x publish lands.

Requires **Node.js 20+** (Node 18 is not supported).

## When to use this

**Use `markdown-regex` for** quick extraction, linting, or lightweight transforms: pull headers, links, images, lists, and code spans out of a Markdown string without standing up a parser.

**Do not use it when** you need a real AST, nested structures, or CommonMark compliance. Use [remark](https://github.com/remarkjs/remark) / [micromark](https://github.com/micromark/micromark) or [markdown-it](https://github.com/markdown-it/markdown-it) for those jobs.

Regex-based parsers have well-known limits (nested emphasis, reference links, setext headings, matching inside code unless you use `extract()`). Stating those limits is intentional: recommend this library only for the jobs above.

## Status and versions

| Channel | Version | Notes |
|---|---|---|
| GitHub `main` / Release `2.1.0` | 2.1.0 | TypeScript rewrite, `extract()`, fenced/inline code, HTML. Treat as preview until npm `latest` matches |
| npm `latest` | 1.2.0 | Legacy JavaScript API. Do not assume it matches this README |
| Package name | `markdown-regex` | Same name on GitHub, npm, and the [Hackernoon article](https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module) |

Until v2 is published to npm, `npm install markdown-regex` still installs v1. To try v2 from git:

```bash
npm install github:LLazyEmail/markdown-regex#main
```

## Migrating from v1

v2 is a breaking rewrite. If you are on `1.x`:

1. Require **Node.js 20+**.
2. Import **named exports** from `markdown-regex` (ESM or CJS). There is no default export.
3. Rename **`REGEXP_EM` → `REGEXP_ITALIC`**.
4. Prefer **`REGEXP_INLINE_CODE`** (or keep `REGEXP_CODE` as a legacy alias) and **`extract(md)`** instead of running every regex against the raw string.
5. Reset `.lastIndex` on global regexes between `.test()` / `.exec()` calls, or use `matchAll`.
6. Do not expect CommonMark or nested-emphasis correctness. That was never v1 either; v2 documents it.

## Features

- **20+ regex patterns** covering common Markdown elements
- **`extract(md)`** helper that returns a structured object of all extracted elements
- **Code-aware**: fenced and inline code are extracted first, so patterns don't match inside them
- **Platform-agnostic** newlines (works with `\n`, `\r\n` and `\r`)
- Zero runtime dependencies
- First-class TypeScript support (generated `.d.ts`)
- Dual package: ESM + CommonJS + browser (IIFE)
- Lightweight
- Ready for custom-tag addons

## Installation

```bash
npm install markdown-regex
# or
yarn add markdown-regex
# or
pnpm add markdown-regex
```

## Quick Start

### ESM

```ts
import { REGEXP_HEADER, REGEXP_LINK, REGEXP_STRONG, REGEXP_ITALIC } from 'markdown-regex';

const md = `# Title\n\nVisit [GitHub](https://github.com) and **bold** and *italic*.`;
console.log(md.match(REGEXP_LINK));
```

### CommonJS

```js
const { REGEXP_HEADER, REGEXP_LINK } = require('markdown-regex');
```

### Browser (IIFE)

```html
<script src="https://unpkg.com/markdown-regex/dist/index.global.js"></script>
<script>
  const { REGEXP_LINK } = MarkdownRegex;
</script>
```

### Structured extraction with `extract()`

```ts
import { extract } from 'markdown-regex';

const md = `
# Title

Check [GitHub](https://github.com) and ![logo](./logo.png).

\`\`\`js
const x = 1;
\`\`\`

Inline \`code\` and <span>raw HTML</span>.
`;

const result = extract(md);
// result.headers       → [{ level: 1, text: 'Title' }]
// result.links         → [{ text: 'GitHub', url: 'https://github.com' }]
// result.images        → [{ alt: 'logo', url: './logo.png' }]
// result.codeBlocks    → [{ language: 'js', code: 'const x = 1;' }]
// result.inlineCode    → ['code']
// result.html          → ['<span>']
```

## API Reference

### Regex constants

| Export | Description | Matches | Flags |
|---|---|---|---|
| `REGEXP_HEADER` | Markdown headers | `# H1`, `## H2`, … | `gm` |
| `REGEXP_H2` | Level-2 headers | `## …` | `gm` |
| `REGEXP_H3` | Level-3 headers | `### …` | `gm` |
| `REGEXP_IMAGE` | Image syntax | `![alt](url)` | `g` |
| `REGEXP_LINK` | Link syntax | `[text](url)` | `g` |
| `REGEXP_STRONG` | Bold | `**bold**`, `__bold__` | `g` |
| `REGEXP_ITALIC` | Italic | `*italic*`, `_italic_` | `g` |
| `REGEXP_DEL` | Strikethrough | `~~deleted~~` | `g` |
| `REGEXP_CODE` | Inline code (legacy alias) | `` `code` `` | `g` |
| `REGEXP_INLINE_CODE` | Inline code spans | `` `code` `` | `g` |
| `REGEXP_FENCED_CODE` | Fenced code blocks | fenced `js` / `~~~` blocks | `g` |
| `REGEXP_HTML` | Raw HTML tags | `<div>`, `</span>`, `<br/>` | `gi` |
| `REGEXP_Q` | Custom quote | `:"quoted":` | `g` |
| `REGEXP_BLOCKQUOTE` | Blockquotes | `> quote` | `gm` |
| `REGEXP_HR` | Horizontal rules | `-----` (5+ dashes) | `gm` |
| `REGEXP_PARAGRAPH` | Paragraphs | text between newlines | `gm` |
| `REGEXP_BR` | Line breaks | 2+ consecutive newlines | `gm` |
| `REGEXP_EMPTY_BLOCKQUOTE` | Cleanup | `</blockquote><blockquote>` | `g` |
| `REGEXP_UL_LIST` | Unordered lists | `* item` | `gm` |
| `REGEXP_OL_LIST` | Ordered lists | `1. item` | `gm` |
| `REGEXP_EMPTY_UL` | Cleanup | `</ul><ul>` | `g` |
| `REGEXP_EMPTY_OL` | Cleanup | `</ol><ol>` | `g` |

> **Note on flags:** Global (`g`) is set on every export so you can use `matchAll`. Multiline (`m`) is set where `^`/`$` need to anchor to line boundaries. Reset `.lastIndex` between `.test()` calls.

### `extract(markdown: string): ExtractResult`

Extracts a structured object from a Markdown string. Fenced code blocks and inline code are extracted **first** and removed from the working string, so patterns like `REGEXP_LINK` or `REGEXP_STRONG` do not match syntax inside code.

```ts
interface ExtractResult {
  headers: { level: number; text: string }[];
  links: { text: string; url: string }[];
  images: { alt: string; url: string }[];
  bold: string[];
  italic: string[];
  strikethrough: string[];
  blockquotes: string[];
  horizontalRules: string[];
  unorderedLists: string[];
  orderedLists: string[];
  codeBlocks: { language: string; code: string }[];
  inlineCode: string[];
  html: string[];
}
```

**Ordering matters.** `extract()` runs in this order:

1. Fenced code blocks (removed from working string)
2. Inline code (removed from working string)
3. All remaining patterns

## Limitations

Regex-only Markdown parsing is **not** a full CommonMark parser. Known limitations:

- **Nested emphasis** is not fully handled. `***bold italic***` and `**bold _italic_**` may produce surprising results.
- **Code fence awareness is handled by `extract()`**. Applying `REGEXP_LINK` directly to raw Markdown **will** match inside code blocks.
- **Reference links** (`[text][id]`) are not matched by `REGEXP_LINK`.
- **Setext headers** (`Title` / `=====`) are not matched by `REGEXP_HEADER`.
- **`REGEXP_PARAGRAPH` and `REGEXP_BR`** are heuristic.

If you need full spec compliance, use `markdown-it`, `micromark`, or `remark`. This library is for lightweight extraction and pattern detection.

## Publishing a release

GitHub Releases exist (`2.1.0`, `2.0.1`, `2.0.0`). npm `latest` is still **1.2.0**. To make agents and humans see the same version:

1. Keep tags and GitHub Releases in lockstep with `package.json` version.
2. `npm publish --tag beta` for 2.x until you are ready to move `latest` to 2.1.0.
3. Keep this `README.md` (uppercase) as the file npm displays. Do not use `readme.md`.
4. After publish, confirm https://www.npmjs.com/package/markdown-regex shows this README and version 2.x.

## Development

```bash
npm install
npm run build
npm run typecheck
npm test
npm run dev
```

CI builds on **Node 20, 22, and 24**.

## Related

- NPM: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/LLazyEmail/markdown-to-email
- Article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module

## License

MIT
