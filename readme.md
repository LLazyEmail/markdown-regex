# markdown-regex

A set of ready-to-use RegExp constants for parsing and extracting elements from Markdown content.

> **v2.0 (beta)** — Fully rewritten in TypeScript, powered by tsup. Zero runtime dependencies.

Requires **Node.js 20+** (Node 18 is not supported).

## Features

- 17+ regex patterns covering common Markdown elements
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

## API Reference

| Export | Description | Matches |
|--------|-------------|--------|
| `REGEXP_HEADER` | Markdown headers | `# H1`, `## H2`, … |
| `REGEXP_H2` | Level-2 headers | `## …` |
| `REGEXP_H3` | Level-3 headers | `### …` |
| `REGEXP_IMAGE` | Image syntax | `![alt](url)` |
| `REGEXP_LINK` | Link syntax | `[text](url)` |
| `REGEXP_STRONG` | Bold | `**bold**`, `__bold__` |
| `REGEXP_ITALIC` | Italic | `*italic*`, `_italic_` |
| `REGEXP_DEL` | Strikethrough | `~~deleted~~` |
| `REGEXP_CODE` | Inline code | `` `code` `` |
| `REGEXP_Q` | Custom quote | `:"quoted":` |
| `REGEXP_BLOCKQUOTE` | Blockquotes | `> quote` |
| `REGEXP_HR` | Horizontal rules | `-----` (5+ dashes) |
| `REGEXP_PARAGRAPH` | Paragraphs | text between newlines |
| `REGEXP_BR` | Line breaks | 2+ consecutive newlines |
| `REGEXP_EMPTY_BLOCKQUOTE` | Cleanup | `</blockquote><blockquote>` |
| `REGEXP_UL_LIST` | Unordered lists | `* item` |
| `REGEXP_OL_LIST` | Ordered lists | `1. item` |
| `REGEXP_EMPTY_UL` | Cleanup | `</ul><ul>` |
| `REGEXP_EMPTY_OL` | Cleanup | `</ol><ol>` |

## Development

```bash
npm install
npm run build        # tsup → dist/
npm run typecheck    # tsc --noEmit
npm test             # Jest
npm run dev          # watch mode
```

CI builds on **Node 20, 22, and 24**. Publish uses Node 24.

## Future: Custom Tag Addons

The library is structured so that additional custom regexes can be added under `src/addons/` (or published as a separate entry) without touching the core.

## Related

- NPM: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/LLazyEmail/markdown-to-email
- Article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module

## License

MIT
