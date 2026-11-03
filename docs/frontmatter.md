# Frontmatter (`markdown-regex/frontmatter`)

Zero-dependency YAML frontmatter pre-pass.

```ts
import { parseFrontmatter } from 'markdown-regex/frontmatter';

const { data, content, hasFrontmatter } = parseFrontmatter(`---
title: Weekly
tags:
  - news
---
# Hello
`);
// data = { title: 'Weekly', tags: ['news'] }
// content = '# Hello\n'
```

## Supported YAML subset

- Scalars: strings, numbers, `true` / `false`, `null` / `~`
- Nested maps (2-space indent)
- Inline lists: `tags: [a, b]`
- Block lists under a key

## Out of scope

Full YAML 1.2 (anchors, tags, `|` / `>` blocks). If you need those, parse the fence body with `yaml` / `js-yaml` yourself — we intentionally keep **zero runtime deps** on the published package.
