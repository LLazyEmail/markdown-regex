# markdown-regex

Zero-dependency, TypeScript-typed RegExp patterns for extracting headers, links, images, lists and code from Markdown.

[![npm version](https://img.shields.io/npm/v/markdown-regex.svg)](https://www.npmjs.com/package/markdown-regex)
[![CI](https://github.com/LLazyEmail/markdown-regex/actions/workflows/ci.yml/badge.svg)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/ci.yml)
[![bundle size](https://img.shields.io/bundlephobia/minzip/markdown-regex)](https://bundlephobia.com/package/markdown-regex)
[![coverage](https://img.shields.io/badge/coverage-vitest%20v8-informational)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Socket Badge](https://badge.socket.dev/npm/package/markdown-regex/)](https://badge.socket.dev/npm/package/markdown-regex/)

> **v2.1.0** is tagged and released on GitHub. The npm `latest` tag is still **1.2.0**. Treat v2 as a preview until an npm 2.x publish lands.

Requires **Node.js 20+**. CI builds on **Node 20, 22, and 24**.

- Agent guide: https://github.com/LLazyEmail/markdown-regex/blob/main/AGENTS.md
- Full API: https://github.com/LLazyEmail/markdown-regex/blob/main/llms-full.txt
- Source index: https://github.com/LLazyEmail/markdown-regex/blob/main/src/index.ts

## When to use this

**Use `markdown-regex` for** quick extraction, linting, or lightweight transforms.

**Do not use it when** you need an AST or CommonMark compliance. Use remark, micromark, or markdown-it.

## Status and versions

| Channel | Version | Notes |
|---|---|---|
| GitHub `main` / Release `2.1.0` | 2.1.0 | TypeScript rewrite |
| npm `latest` | 1.2.0 | Legacy JavaScript API |
| Package name | `markdown-regex` | Same name on GitHub and npm |

```bash
npm install github:LLazyEmail/markdown-regex#main
```

## Quick Start

```ts
import { extractLinks, extractHeaders, REGEXP_LINK } from 'markdown-regex';

extractLinks('[a](b)');
// [{ text: 'a', url: 'b' }]

extractHeaders('# Title');
// [{ level: 1, text: 'Title' }]

'[a](b)'.match(REGEXP_LINK);
// ['[a](b)', 'a', 'b']
```

Every regex is global (`g`). Reset `.lastIndex` between `.test()` calls, or use `matchAll`.

## API Reference

See the tables in this README and [llms-full.txt](./llms-full.txt). HTML cleanup lives on `markdown-regex/cleanup`.

```ts
import { REGEXP_EMPTY_UL } from 'markdown-regex/cleanup';
import { extractLinks } from 'markdown-regex';
```

## Limitations

- Nested emphasis is not fully handled.
- `REGEXP_LINK` on raw Markdown matches inside code. Use `extractLinks()`.
- Reference links and setext headers are not matched.
- See [SECURITY.md](./SECURITY.md) for ReDoS. CI runs `tests/redos.test.ts` on every exported pattern.

## Development

```bash
npm install
npm run build
npm run typecheck
npm test
npm run test:coverage
```

Tests are **Vitest** (`tests/**/*.test.ts`). Jest is not used.

CI builds on **Node 20, 22, and 24**.

## Related

- NPM: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/LLazyEmail/markdown-to-email
- Article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module
- Agent guide: https://github.com/LLazyEmail/markdown-regex/blob/main/AGENTS.md
- Full API: https://github.com/LLazyEmail/markdown-regex/blob/main/llms-full.txt
- Source index: https://github.com/LLazyEmail/markdown-regex/blob/main/src/index.ts

## License

MIT
