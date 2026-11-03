# markdown-regex docs (scaffold)

Thin documentation set destined for a small Docusaurus site powered by
[`LLazyEmail/documentation-actions`](https://github.com/LLazyEmail/documentation-actions).

**This PR does not enable GitHub Pages or add a `website/` app yet.** It lands
content so a follow-up can adopt `reusable-docs-ci` / deploy workflows using the
[docusaurus-docs-site skill](https://github.com/LLazyEmail/documentation-actions/blob/main/skills/docusaurus-docs-site/SKILL.md).

## Planned site map

| Page | Source |
| --- | --- |
| Introduction | this folder → `intro.md` |
| API | generated / mirrored from `llms-full.txt` |
| Recipes | `examples/recipes/` |
| Agents | `AGENTS.md` + `SKILL.md` |

## Adoption checklist (follow-up)

- [ ] Add `website/` Docusaurus app (or root layout) per documentation-actions skill
- [ ] Call `LLazyEmail/documentation-actions/.github/workflows/reusable-docs-ci.yml@v1`
- [ ] Pin Node 22 or 24 via `.nvmrc`
- [ ] Deploy only after Arthur enables Pages for this repo (do not nag on unrelated forks)
