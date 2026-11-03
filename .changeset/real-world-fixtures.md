---
"markdown-regex": patch
"@markdown-regex/core": patch
"@markdown-regex/frontmatter": patch
"@markdown-regex/blocks": patch
"@markdown-regex/email": patch
---

Add a real-world fixture Vitest suite (`pnpm test:fixtures`) with automatic folder discovery under `fixtures/real-world/`, file snapshots for extract/frontmatter/blocks, and a separate Fixtures CI job (PR + nightly).
