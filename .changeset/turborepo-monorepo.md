---
"markdown-regex": minor
---

Adopt pnpm workspaces + Turborepo. Split private `@markdown-regex/{core,frontmatter,blocks,email}` packages (bundled into the public package) and add subpath exports `./frontmatter`, `./blocks`, and `./email` alongside `./cleanup`.
