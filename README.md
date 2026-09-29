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

## Status and versions

| Channel | Version | Notes |
|---|---|---|
| GitHub `main` / Release `2.1.0` | 2.1.0 | TypeScript rewrite, `extract()`, fenced/inline code, HTML |
| npm `latest` | 1.2.0 | Legacy JavaScript API |
| Package name | `markdown-regex` | Same name on GitHub and npm |

```bash
npm install github:LLazyEmail/markdown-regex#main
```

## Quick Start

Prefer the typed helpers so you do not have to remember capture groups or `lastIndex`:

```ts
import { extractLinks, extractHeaders } from 'markdown-regex';

extractLinks('[a](b)');
// [{ text: 'a', url: 'b' }]

extractHeaders('# Title');
// [{ level: 1, text: 'Title' }]
```

Every regex is **global (`g`)**. Reusing `.test()` without resetting `.lastIndex` will skip every other call:

```ts
import { REGEXP_LINK } from 'markdown-regex';

REGEXP_LINK.test('[a](b)'); // true
REGEXP_LINK.test('[a](b)'); // false  ← lastIndex was left mid-string
REGEXP_LINK.lastIndex = 0;
REGEXP_LINK.test('[a](b)'); // true
```

`String.prototype.matchAll` (or a fresh `new RegExp(REGEXP_LINK)`) avoids that class of bug.

### Raw match output

```ts
'[a](b)'.match(REGEXP_LINK);
// ['[a](b)', 'a', 'b']
//              ^text  ^url
```

## API Reference

### Markdown regexes

| Export | Flags | Captures | Example | Fails on |
|---|---|---|---|---|
| `REGEXP_HEADER` | `gm` | `[1]` prefix, `[2]` `#` run, `[3]` text | `'# Header 1'.match(REGEXP_HEADER)` → `['# Header 1', '', '#', 'Header 1']` | setext |
| `REGEXP_H2` | `gim` | `[1]` text | `'## H'.match(REGEXP_H2)` → `['## H', 'H']` | `# H` |
| `REGEXP_H3` | `gim` | `[1]` text | `'### H'.match(REGEXP_H3)` → `['### H', 'H']` | `## H` |
| `REGEXP_IMAGE` | `g` | `[1]` alt, `[2]` url | `'![logo](./x.png)'.match(REGEXP_IMAGE)` | `[logo](url)` |
| `REGEXP_LINK` | `g` | `[1]` text, `[2]` url | `'[a](b)'.match(REGEXP_LINK)` → `['[a](b)', 'a', 'b']` | `[a][id]`, links inside code |
| `REGEXP_STRONG` | `g` | `[1]` `**` text, `[2]` `__` text | `'**bold**'.match(REGEXP_STRONG)` → `['**bold**', 'bold', undefined]` | nested `***…***` |
| `REGEXP_ITALIC` | `g` | `[1]` lead, `[2]` delim, `[3]` text, `[4]` trail | `' *i* '.match(REGEXP_ITALIC)` | `not*italic*`, mid-word `_` |
| `REGEXP_DEL` | `g` | `[1]` text | `'~~x~~'.match(REGEXP_DEL)` | `~x~` |
| `REGEXP_CODE` | `g` | `[1]` text | inline backticks | fenced blocks |
| `REGEXP_INLINE_CODE` | `g` | `[1]` ticks, `[2]` text | prefer over `REGEXP_CODE` | escaped ticks |
| `REGEXP_FENCED_CODE` | `g` | `[1]` fence, `[2]` lang, `[3]` body | fenced blocks | indented-only code |
| `REGEXP_HTML` | `gi` | `[0]` full tag | `'<br/>'.match(REGEXP_HTML)` | `<<not-a-tag>>` |
| `REGEXP_Q` | `g` | `[1]` text | `':"q":'` | `"q"` |
| `REGEXP_BLOCKQUOTE` | `g` | `[1]` text | needs a leading newline before `>` | start-of-string `>` |
| `REGEXP_HR` | `g` | `[0]` full match | 5+ dashes after a newline | `---` |
| `REGEXP_PARAGRAPH` | `g` | `[1]` text | heuristic | single-line input |
| `REGEXP_BR` | `g` | `[0]` the breaks | two or more newlines | a single newline |
| `REGEXP_UL_LIST` | `gm` | `[1]` item text | `'* item'` | `- item` |
| `REGEXP_OL_LIST` | `gm` | `[1]` item text | `'1. item'` | `1) item` |

### HTML cleanup (`markdown-regex/cleanup`)

These match **generated HTML**, not Markdown.

```ts
import { REGEXP_EMPTY_UL, REGEXP_EMPTY_OL, REGEXP_EMPTY_BLOCKQUOTE } from 'markdown-regex/cleanup';
```

Still re-exported from `markdown-regex` for compatibility.

| Export | Flags | Example | Fails on |
|---|---|---|---|
| `REGEXP_EMPTY_UL` | `g` | `'</ul><ul>'` | a real `<ul><li>` |
| `REGEXP_EMPTY_OL` | `g` | `'</ol><ol>'` | a real `<ol><li>` |
| `REGEXP_EMPTY_BLOCKQUOTE` | `g` | `'</blockquote><blockquote>'` | a filled blockquote |

### One-line helpers

```ts
import { extractLinks, extractImages, extractHeaders, extract } from 'markdown-regex';

extractLinks('See [a](b) and ` [nope](x) `.');
// [{ text: 'a', url: 'b' }]

extractImages('![logo](./logo.png)');
// [{ alt: 'logo', url: './logo.png' }]

extractHeaders('# Title\n## Sub');
// [{ level: 1, text: 'Title' }, { level: 2, text: 'Sub' }]
```

`extract(md)` still returns the full `ExtractResult`. Helpers strip fenced then inline code first.

## Limitations

- Nested emphasis is not fully handled (`***bold italic***`).
- `REGEXP_LINK` on raw Markdown **will** match inside code. Use `extractLinks()`.
- Reference links and setext headers are not matched.

## Development

```bash
npm install
npm run build
npm run typecheck
npm test
```

## License

MIT
