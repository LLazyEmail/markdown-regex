# Custom blocks (`markdown-regex/blocks`)

Flat, non-nested `:::name` containers.

```ts
import {
  extractCustomBlocks,
  registerBlockRule,
} from 'markdown-regex/blocks';

registerBlockRule({ name: 'warning', order: 1 });
registerBlockRule({ name: 'note', order: 10 });

extractCustomBlocks(`:::note
hi
:::

:::warning
careful
:::`);
// → warning first (order 1), then note
```

## Fence-first ordering

1. Fenced code regions are blanked so `:::` inside \`\`\` fences is ignored.
2. Flat `:::name … :::` blocks are matched (`REGEXP_CUSTOM_BLOCK`).
3. If a rule registry is populated, results are sorted by `order` then by document index.

## Non-goals (follow-up)

- Nested `:::` containers
- Remark / MDX AST rendering for email HTML

Track nested/email remark rendering as a separate issue after this lands.
