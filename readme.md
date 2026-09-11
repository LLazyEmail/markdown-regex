# markdown-regex

Ready-to-use **RegExp** constants for parsing and extracting Markdown elements.

Zero runtime dependencies. TypeScript-first. Works in Node, bundlers, and the browser.

[![npm version](https://img.shields.io/npm/v/markdown-regex.svg)](https://www.npmjs.com/package/markdown-regex)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

> **v2.0** — TypeScript + tsup. Breaking: `REGEXP_EM` → `REGEXP_ITALIC`, platform-agnostic newlines, dual package exports.

## Features

- 17+ patterns for common Markdown constructs
- Platform-agnostic newlines (`\n`, `\r\n`, `\r`)
- Zero runtime dependencies
- Generated TypeScript declarations
- **ESM**, **CommonJS**, and **browser (IIFE)** builds
- Designed for email / constrained Markdown pipelines (not a full CommonMark parser)

## Install

```bash
npm install markdown-regex
# or
yarn add markdown-regex
# or
pnpm add markdown-regex
```

Requires **Node.js 18+** (or any modern bundler / browser).

## Quick start

### ESM

```ts
import { REGEXP_HEADER, REGEXP_LINK, REGEXP_STRONG, REGEXP_ITALIC } from 'markdown-regex';

const md = `# Title\n\nVisit [GitHub](https://github.com) for **bold** and *italic*.`;
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

## API

| Export | Description | Matches |
|--------|-------------|--------|
| `REGEXP_HEADER` | Headers | `# H1`, `## H2`, … |
| `REGEXP_H2` | H2 | `## …` |
| `REGEXP_H3` | H3 | `### …` |
| `REGEXP_IMAGE` | Images | `![alt](url)` |
| `REGEXP_LINK` | Links | `[text](url)` |
| `REGEXP_STRONG` | Bold | `**bold**`, `__bold__` |
| `REGEXP_ITALIC` | Italic | `*italic*`, `_italic_` |
| `REGEXP_DEL` | Strikethrough | `~~deleted~~` |
| `REGEXP_CODE` | Inline code | `` `code` `` |
| `REGEXP_Q` | Custom quote | `:"quoted":` |
| `REGEXP_BLOCKQUOTE` | Blockquotes | `> quote` |
| `REGEXP_HR` | Horizontal rules | `-----` (5+ dashes) |
| `REGEXP_PARAGRAPH` | Paragraphs | text between newlines |
| `REGEXP_BR` | Line breaks | 2+ consecutive newlines |
| `REGEXP_EMPTY_BLOCKQUOTE` | HTML cleanup | `</blockquote><blockquote>` |
| `REGEXP_UL_LIST` | Unordered lists | `* item` |
| `REGEXP_OL_LIST` | Ordered lists | `1. item` |
| `REGEXP_EMPTY_UL` | HTML cleanup | `</ul><ul>` |
| `REGEXP_EMPTY_OL` | HTML cleanup | `</ol><ol>` |

> **Note:** Some patterns expect surrounding context (e.g. a leading newline for headers, whitespace around italic). See tests for concrete examples.

## Breaking changes in 2.0

1. **`REGEXP_EM` removed** — use **`REGEXP_ITALIC`**.
2. Newlines no longer depend on `os.platform()`; patterns match Unix and Windows line endings.
3. Package entry is dual ESM/CJS with generated types; consume via `import` / `require` as usual.

## Development

```bash
npm install
npm run typecheck
npm run build
npm test
npm run pack:check   # preview files that would be published
```

## Publishing

1. Merge hygiene / test PRs and delete legacy paths listed in `HYGIENE.md`.
2. Ensure `npm_token` is set in repo secrets.
3. Create a **GitHub Release** tagged `v2.0.0` (or bump version and tag accordingly).
4. The **Node.js Package** workflow publishes with `npm publish --access public --provenance`.

Manual publish (local):

```bash
npm run prepublishOnly
npm publish --access public
```

## Related

- npm: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/LLazyEmail/markdown-to-email
- Article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module

## License

[MIT](./LICENSE)
