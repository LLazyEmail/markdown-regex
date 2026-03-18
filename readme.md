# markdown-regex

[![NPM](https://nodei.co/npm/markdown-regex.png)](https://npmjs.org/package/markdown-regex)
[![npm version](https://badge.fury.io/js/markdown-regex.svg)](https://badge.fury.io/js/markdown-regex)
[![Tests](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml/badge.svg)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A set of ready-to-use RegExp constants for parsing and extracting elements from Markdown content.

## Features

- 17 regex patterns covering all common Markdown elements
- Cross-platform support (Windows `\r\n` and Unix `\n` line endings)
- Zero runtime dependencies
- TypeScript definitions included
- Lightweight (~2 KB)

## Installation

```bash
npm install markdown-regex
```

```bash
yarn add markdown-regex
```

## Quick Start

### CommonJS

```javascript
const { REGEXP_HEADER, REGEXP_LINK } = require('markdown-regex');
```

### ES Modules

```javascript
import { REGEXP_HEADER, REGEXP_LINK } from 'markdown-regex';
```

## API Reference

| Export | Description | Matches |
|--------|-------------|---------|
| `REGEXP_HEADER` | Markdown headers | `# H1`, `## H2`, `### H3` |
| `REGEXP_IMAGE` | Image syntax | `![alt](url)` |
| `REGEXP_LINK` | Link syntax | `[text](url)` |
| `REGEXP_STRONG` | Bold text | `**bold**`, `__bold__` |
| `REGEXP_EM` | Italic/emphasis | `*italic*`, `_italic_` |
| `REGEXP_DEL` | Strikethrough | `~~deleted~~` |
| `REGEXP_CODE` | Inline code | `` `code` `` |
| `REGEXP_Q` | Quoted text | `:"quoted":` |
| `REGEXP_BLOCKQUOTE` | Blockquotes | `> quote` |
| `REGEXP_HR` | Horizontal rules | `-----` (5+ dashes) |
| `REGEXP_PARAGRAPH` | Paragraphs | Block of text between newlines |
| `REGEXP_BR` | Line breaks | Two or more consecutive newlines |
| `REGEXP_EMPTY_BLOCKQUOTE` | Consecutive blockquote HTML tags | `</blockquote><blockquote>` |
| `REGEXP_UL_LIST` | Unordered list items | `* item` |
| `REGEXP_OL_LIST` | Ordered list items | `1. item` |
| `REGEXP_EMPTY_UL` | Consecutive unordered list HTML tags | `</ul><ul>` |
| `REGEXP_EMPTY_OL` | Consecutive ordered list HTML tags | `</ol><ol>` |

## Usage Examples

### Extract all links from Markdown

```javascript
import { REGEXP_LINK } from 'markdown-regex';

const markdown = 'Visit [GitHub](https://github.com) and [npm](https://npmjs.com).';
const matches = markdown.match(REGEXP_LINK);
console.log(matches);
// [ '[GitHub](https://github.com)', '[npm](https://npmjs.com)' ]
```

### Extract headers

```javascript
import { REGEXP_HEADER } from 'markdown-regex';

const markdown = '\n# Title\n## Subtitle\n### Section';
const matches = markdown.match(REGEXP_HEADER);
console.log(matches);
// [ '\n# Title', '\n## Subtitle', '\n### Section' ]
```

### Extract images

```javascript
import { REGEXP_IMAGE } from 'markdown-regex';

const markdown = 'Here is an ![example image](https://example.com/img.png).';
const matches = markdown.match(REGEXP_IMAGE);
console.log(matches);
// [ '![example image](https://example.com/img.png)' ]
```

See [`examples/basic-usage.js`](examples/basic-usage.js) for a more comprehensive demonstration.

## TypeScript Support

TypeScript definitions are included. No `@types/` package is needed:

```typescript
import { REGEXP_LINK, REGEXP_HEADER } from 'markdown-regex';

const links: RegExpMatchArray | null = text.match(REGEXP_LINK);
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## Related

- NPM: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/atherdon/markdown-to-email
- Hackernoon article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module

## License

[MIT](LICENSE)

## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)
