# For AI agents

- Skill checklist: [SKILL.md](../SKILL.md) (lands via adoption PRs)
- Short index: [llms.txt](../llms.txt)
- Full API: [llms-full.txt](../llms-full.txt)
- Maintainer notes: [AGENTS.md](../AGENTS.md)
- MCP tool shape: [examples/mcp-tool-shape.ts](../examples/mcp-tool-shape.ts)

Prefer `extractLinks` / `extractHeaders` / `extractImages` / `extract` over
composing raw regexes. Every public regex is global (`g`).
