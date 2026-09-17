# markdown-regex



A set of ready-to-use RegExp constants for parsing and extracting elements from Markdown content.


[![NPM](https://nodei.co/npm/markdown-regex.png)](https://npmjs.org/package/markdown-regex)
[![npm version](https://badge.fury.io/js/markdown-regex.svg)](https://badge.fury.io/js/markdown-regex)
[![Tests](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml/badge.svg)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **v2.1 (beta)** — Fully rewritten in TypeScript, powered by tsup. Zero runtime dependencies.

Requires **Node.js 20+** (Node 18 is not supported).

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
| `REGEXP_INLINE_CODE` | Inline code spans | `` `code` ``, ``` ``code`` ``` | `g` |
| `REGEXP_FENCED_CODE` | Fenced code blocks | ` ```js … ``` `, `~~~ … ~~~` | `g` |
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

> **Note on flags:** Global (`g`) is set on every export so you can use `matchAll`. If you need only the first match, use `str.match(REGEXP_X)` (the `g` flag is ignored by `String.prototype.match` for the first match shape, but `matchAll` requires it). Multiline (`m`) is set where `^`/`$` need to anchor to line boundaries.

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

This is what prevents false positives like `**bold**` being counted inside a code block.

## Limitations

Regex-only Markdown parsing is **not** a full CommonMark parser. Known limitations:

- **Nested emphasis** is not fully handled. `***bold italic***` and `**bold _italic_**` may produce surprising results. Test fixtures cover the common cases; open an issue if you hit a specific failure.
- **Code fence awareness is handled by `extract()`**, but if you apply `REGEXP_LINK` directly to raw Markdown, it **will** match inside code blocks. Use `extract()` or pre-strip code yourself.
- **Reference links** (`[text][id]`) are not matched by `REGEXP_LINK`.
- **Link titles** (`[text](url "title")`) are partially supported — check the test fixtures for the exact shape.
- **HTML comments** (`<!-- -->`) and doctypes are not matched by `REGEXP_HTML`.
- **`REGEXP_PARAGRAPH` and `REGEXP_BR`** produce heuristic results on lists, blockquotes, and code fences. They are best-effort.
- **Setext headers** (`Title\n=====`) are not matched by `REGEXP_HEADER`.

If you need full spec compliance, this library is not a replacement for a real parser (e.g. `markdown-it`, `micromark`). It is meant for lightweight extraction and pattern detection.

## Testing with Real Files

The test suite uses **fixture-based testing** — real Markdown files in `tests/fixtures/` are loaded and passed through `extract()`, with the output snapshotted via Jest.

```
tests/
├── fixtures/
│   ├── sample-article.md
│   ├── nested-lists.md
│   ├── code-heavy.md
│   ├── html-mixed.md
│   └── edge-cases.md
├── fixtures.test.ts
└── code-and-html.test.ts
```

To add a new fixture, drop a `.md` file into `tests/fixtures/`. It will be picked up automatically and a snapshot will be created on first run.

```bash
npm test              # run all tests
npm test -- -u        # update snapshots after intentional changes
```

### Sharing fixtures across repositories

If you maintain multiple repositories that need the same Markdown fixtures, the recommended approach is to publish them as a **private npm package** (e.g. `@your-scope/markdown-test-fixtures`) and add it as a `devDependency`. This gives you a single source of truth with proper versioning, and each dependent repo can adopt new fixtures on its own schedule.

Avoid Git submodules, symlinks, or copying files — they create drift and break on fresh clones and in CI.

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

The library is structured so that additional custom regexes can be added under `src/addons/` (or published as a separate entry) without touching the core. `REGEXP_Q` (`:"quoted":`) is an example of a custom tag that is not part of standard Markdown.

## Changelog

### v2.1 (unreleased)
- **Added** `REGEXP_FENCED_CODE` for ```` ``` ```` and `~~~` fenced code blocks
- **Added** `REGEXP_INLINE_CODE` for inline code spans (replaces `REGEXP_CODE`, which is kept as an alias)
- **Added** `REGEXP_HTML` for raw HTML tags
- **Added** `extract(md)` helper returning a structured `ExtractResult`
- **Added** fixture-based test suite under `tests/fixtures/`
- **Docs**: added flags column to API table, limitations section, and testing section

### v2.0
- Fully rewritten in TypeScript, powered by tsup
- Zero runtime dependencies
- Dual package: ESM + CommonJS + browser (IIFE)
- Requires Node.js 20+

## Related

- NPM: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/LLazyEmail/markdown-to-email
- Article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module

## License

MIT
```

---

## What changed vs. the original

| Section | Change |
|---|---|
| Version banner | `v2.0` → `v2.1 (beta)` |
| Features | Added `extract()`, code-awareness, and updated count to 20+ |
| Quick Start | Added a full `extract()` example with output comments |
| API Reference | New rows for `REGEXP_FENCED_CODE`, `REGEXP_INLINE_CODE`, `REGEXP_HTML`. Added a **Flags** column. Marked `REGEXP_CODE` as a legacy alias. |
| `extract()` docs | New subsection with the `ExtractResult` interface and the ordering explanation |
| **Limitations** | **New section** — sets expectations before users file issues |
| **Testing** | **New section** — documents the fixture sandbox and the multi-repo sharing recommendation |
| **Changelog** | **New section** — v2.1 and v2.0 summaries |
| Future addons | Added note that `REGEXP_Q` is an example of a custom tag |

The two highest-value additions are the **Limitations** section (regex-based Markdown parsing will surprise users, and this preempts most bug reports) and the **Flags column** in the API table (the #1 thing consumers need to know when calling `.match()` vs `.matchAll()`).
