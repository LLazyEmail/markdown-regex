# markdown-regex

[![NPM](https://nodei.co/npm/markdown-regex.png)](https://npmjs.org/package/markdown-regex)
[![npm version](https://badge.fury.io/js/markdown-regex.svg)](https://badge.fury.io/js/markdown-regex)
[![Tests](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml/badge.svg)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A set of ready-to-use RegExp constants for parsing and extracting elements from Markdown content.

## Features

- 20 regex patterns covering all common Markdown elements
- Cross-platform support (Windows `\r\n` and Unix `\n` line endings)
- Zero runtime dependencies
- TypeScript definitions included
- Lightweight (~2 KB)
- JSDoc comments for IDE autocomplete

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

| Export | Description | Pattern | Matches |
|--------|-------------|---------|--------|
| `REGEXP_HEADER` | All markdown headers | `/\n(#+).*/g` | `# H1`, `## H2`, `### H3` |
| `REGEXP_H2` | Level 2 headers only | `/^## (.*$)/gim` | `## Heading 2` |
| `REGEXP_H3` | Level 3 headers only | `/^### (.*$)/gim` | `### Heading 3` |
| `REGEXP_IMAGE` | Image syntax | `/!\[([^\[]+)\]\(([^\)]+)\)/g` | `![alt](url)` |
| `REGEXP_LINK` | Link syntax | `/\[([^\[]+)\]\(([^\)]+)\)/g` | `[text](url)` |
| `REGEXP_STRONG` | Bold text | `/(\*\*|__)(.*?)(\*?)\1/g` | `**bold**`, `__bold__` |
| `REGEXP_EM` | Italic/emphasis | `/(\s\|>)(\*\|_)(.*?)\2(\s\|<)/g` | `*italic*`, `_italic_` |
| `REGEXP_DEL` | Strikethrough | `/\~\~(.*?)\~\~/g` | `~~deleted~~` |
| `REGEXP_CODE` | Inline code | `/`(.*?)`/g` | `` `code` `` |
| `REGEXP_Q` | Quoted text | `/\:"(.*?)":/g` | `::"quoted":`  |
| `REGEXP_BLOCKQUOTE` | Blockquotes | `/\n(&gt;\|\\>).*/g` | `> quote` |
| `REGEXP_HR` | Horizontal rules | `/\n-{5,}/g` | `-----` (5+ dashes) |
| `REGEXP_PARAGRAPH` | Paragraphs | `/\n(.+?)\n/g` | Block of text between newlines |
| `REGEXP_BR` | Line breaks | `/((\n){2,})/g` | Two or more consecutive newlines |
| `REGEXP_EMPTY_BLOCKQUOTE` | Consecutive blockquote HTML tags | `/<\/blockquote><blockquote>/g` | `</blockquote><blockquote>` |
| `REGEXP_UL_LIST` | Unordered list items | `/\n(((\s{4})?\*(.*?)\n){1,})/g` | `* item` |
| `REGEXP_OL_LIST` | Ordered list items | `/\n[0-9]+\\.(.*)./g` | `1. item` |
| `REGEXP_EMPTY_UL` | Consecutive unordered list HTML tags | `/<\/ul>\s?<ul>/g` | `</ul><ul>` |
| `REGEXP_EMPTY_OL` | Consecutive ordered list HTML tags | `/<\/ol>\s?<ol>/g` | `</ol><ol>` |

## Usage Examples

### Extract all links from Markdown

```javascript
import { REGEXP_LINK } from 'markdown-regex';

const markdown = 'Check out [GitHub](https://github.com) and [npm](https://npmjs.com) for more info.';
const links = markdown.match(REGEXP_LINK);
console.log(links);
// [ '[GitHub](https://github.com)', '[npm](https://npmjs.com)' ]

// Test if a link exists
if (REGEXP_LINK.test(markdown)) {
  console.log('Markdown contains links');
}
```

### Extract and parse headers

```javascript
import { REGEXP_HEADER, REGEXP_H2 } from 'markdown-regex';

const markdown = `
# Main Title
## Section One
### Subsection
## Section Two
`;

// Get all headers with their levels
const allHeaders = markdown.match(REGEXP_HEADER);
console.log(allHeaders);
// [ '\n# Main Title', '\n## Section One', '\n### Subsection', '\n## Section Two' ]

// Get only level 2 headers
const h2Headers = markdown.match(REGEXP_H2);
console.log(h2Headers);
// [ '## Section One', '## Section Two' ]
```

### Find and replace bold text

```javascript
import { REGEXP_STRONG } from 'markdown-regex';

const markdown = 'This is **important** and __really important__.';

// Find all bold text
const bold = markdown.match(REGEXP_STRONG);
console.log(bold);
// [ '**important**', '__really important__' ]

// Remove markdown bold formatting
const plainText = markdown.replace(REGEXP_STRONG, '$2');
console.log(plainText);
// 'This is important and really important.'
```

### Extract images and build image gallery

```javascript
import { REGEXP_IMAGE } from 'markdown-regex';

const markdown = `
Here's a photo: ![sunset](./sunset.jpg)
And another: ![mountain](./mountain.png)
`;

const images = markdown.match(REGEXP_IMAGE);
console.log(images);
// [ '![sunset](./sunset.jpg)', '![mountain](./mountain.png)' ]

// Extract image URLs
const imageUrls = [];
let match;
const regex = /!\[([^\[]+)\]\(([^\)]+)\)/g;
while ((match = regex.exec(markdown)) !== null) {
  imageUrls.push({ alt: match[1], url: match[2] });
}
console.log(imageUrls);
// [ { alt: 'sunset', url: './sunset.jpg' }, { alt: 'mountain', url: './mountain.png' } ]
```

### Parse list items

```javascript
import { REGEXP_UL_LIST, REGEXP_OL_LIST } from 'markdown-regex';

const markdown = `
* First item
* Second item
* Third item

1. First step
2. Second step
3. Third step
`;

const ulItems = markdown.match(REGEXP_UL_LIST);
const olItems = markdown.match(REGEXP_OL_LIST);

console.log('Unordered lists:', ulItems);
console.log('Ordered lists:', olItems);
```

### Find paragraphs and blockquotes

```javascript
import { REGEXP_PARAGRAPH, REGEXP_BLOCKQUOTE } from 'markdown-regex';

const markdown = `
First paragraph here.
Still in first paragraph.

Second paragraph after blank line.

> This is a blockquote
> It can span multiple lines
`;

const paragraphs = markdown.match(REGEXP_PARAGRAPH);
const blockquotes = markdown.match(REGEXP_BLOCKQUOTE);

console.log('Paragraphs:', paragraphs?.length);
console.log('Blockquotes:', blockquotes?.length);
```

See [`examples/basic-usage.js`](examples/basic-usage.js) for a more comprehensive demonstration.

## Regex Patterns Reference

For detailed regex pattern documentation, refer to the [API Reference](#api-reference) table above which includes the actual regex source for each pattern.

### Platform-Aware Patterns

Several patterns (`REGEXP_HEADER`, `REGEXP_BLOCKQUOTE`, `REGEXP_HR`, `REGEXP_BR`, `REGEXP_PARAGRAPH`, `REGEXP_UL_LIST`, `REGEXP_OL_LIST`) automatically adapt to your platform's line ending convention:
- **Windows**: Uses `\r\n`
- **Unix/Linux/macOS**: Uses `\n`

This ensures reliable pattern matching regardless of where your code runs.

## TypeScript Support

TypeScript definitions are included. No `@types/` package is needed:

```typescript
import { REGEXP_LINK, REGEXP_HEADER, REGEXP_H2 } from 'markdown-regex';

const text = '# Title\n[link](url)';
const links: RegExpMatchArray | null = text.match(REGEXP_LINK);
const headers: RegExpMatchArray | null = text.match(REGEXP_HEADER);
const h2Headers: RegExpMatchArray | null = text.match(REGEXP_H2);
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
