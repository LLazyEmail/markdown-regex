# markdown-regex

Zero-dependency, TypeScript-typed RegExp patterns for extracting headers,
links, images, lists, and code from Markdown.

```bash
npm install markdown-regex
```

```ts
import { extractLinks, extractHeaders } from 'markdown-regex';

extractLinks('[docs](https://example.com)');
extractHeaders('# Hello');
```

Use this library for linting, scripts, and AI-agent tools. Prefer remark,
micromark, or markdown-it when you need an AST or CommonMark compliance.

See the [README](../README.md), [AGENTS.md](../AGENTS.md), and [llms.txt](../llms.txt).
