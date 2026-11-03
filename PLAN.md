# Roadmap: grow adoption (humans + AI agents)

**Repo:** [LLazyEmail/markdown-regex](https://github.com/LLazyEmail/markdown-regex)  
**npm:** [markdown-regex@2.1.1](https://www.npmjs.com/package/markdown-regex)  
**Audit date:** 2026-11-03 (Europe/Kiev)  
**Owner:** Arthur Tkachenko (`atherdon`)

## 1. Audit snapshot

### Downloads (api.npmjs.org)

| Window | Downloads |
| --- | ---: |
| Last day | 2 |
| Last week | 25 |
| Last month | ~113–120 |
| Last 90 days | ~766 |
| Last year | **1,003** |

Spikes coincide with releases (193 on 2026-09-13, 281 on 2026-09-29). Baseline organic demand is still single-digit most days. Stars: **10**. Forks: **3**. Open issues: **21** (many stale).

### package.json / publish surface (2.1.1)

| Area | Status | Notes |
| --- | --- | --- |
| description | Good | Clear value prop |
| keywords | Good, expandable | Has markdown/regex/typescript/zero-dependency; missing agent/cli/extract-focused terms |
| exports | Good | `.` + `./cleanup`; types/import/require/browser |
| types | Good | `dist/index.d.ts` + dts for cleanup |
| engines | `node >= 20` | CI matrix 20/22/24 already |
| sideEffects | `false` | Tree-shake friendly |
| files | Narrow | Only `dist` + README; LICENSE ships via npm default; agent docs (`llms.txt`, `AGENTS.md`) **not** in the tarball |
| dependencies | **Zero** | Correct differentiator |
| bin / CLI | **Missing** | |
| provenance | Present | `npm publish --provenance` on Release |

Bundle (bundlephobia @2.1.1): ~3.2 kB / **~1.4 kB gzip**, 0 deps.

### README / agent docs

- README has badges, quick start, limitations, related links — but **stale version table** still claims npm `latest` is `1.2.0` while registry `latest` is **2.1.1**.
- Missing: comparison table, downloads badge, crisp 30-second hero above the fold, recipe gallery.
- Already present: `AGENTS.md`, `llms.txt`, `llms-full.txt`, solid JSDoc on most regex exports.
- Missing for agents: `SKILL.md`, MCP-oriented example, packaged agent docs in the npm tarball.

### API / tests / quality

- Public surface: regex constants + `extract` / `extractLinks` / `extractImages` / `extractHeaders` + cleanup subpath. No breaking changes needed for growth.
- Vitest: **123 tests / 10 files** green locally. Coverage ~**51%** statements — `src/extract.ts` is **0%** covered (extractors are tested; full `extract()` is not).
- Legacy `tests/**/*.test.js` exist but are **not** in the Vitest include glob.
- CI: lint/typecheck/build/test/coverage on Node 20/22/24. Publish on GitHub Release with OIDC provenance. No changesets / changelog-fragment auto-release yet (generate-template has that pattern).

### Competitors (closest niche, last-month downloads)

| Package | ~Downloads / month | Overlap |
| --- | ---: | --- |
| **remove-markdown** | 4.3M | Strip formatting (different job) |
| **markdown-link-extractor** | 823k | Links only; we also do headers/images/lists/code |
| **markdown-toc** | 396k | TOC generation |
| **markdown-it-regexp** | 51k | Plugin helper, not a pattern library |
| **extract-md-headings** | 158 | Headers only |
| **markdown-extract** | 105 | Partial extract |
| **markdown-regex (us)** | **~113** | Multi-pattern + typed extract helpers |

Full parsers (marked ~333M, micromark ~249M, markdown-it ~108M, remark ~26M) are **not** competitors for the “zero-dep RegExp constants” niche — README already says when to use them instead. Winning means owning the **lightweight extract / lint / transform** search intent and AI-agent discovery, not beating parsers on downloads.

### Gaps vs goals

1. Discoverability: stale README status, thin topics, no comparison table, low SEO keywords.
2. DX: no CLI; agent files not shipped in npm pack; coverage hole on `extract()`.
3. AI agents: no `SKILL.md`; no MCP recipe; docs not in tarball.
4. Docs site: none; LLazyEmail/documentation-actions is ready to host a thin Docusaurus caller.
5. Release DX: no changeset fragments / auto version PR (generate-template model).
6. Promotion: Hackernoon article exists; no recent dev.to / awesome-list push.

---

## 2. Ranked plan (do first → later)

Priority = (adoption impact × agent usefulness) / risk. Prefer additive, non-breaking PRs.

### P0 — Discoverability & trust (this batch)

1. **Fix README version status + hero** — state npm `latest` = 2.1.1; one-line `npm i markdown-regex`; 30-second example above the fold; keep existing content.
2. **Comparison table** — vs `markdown-link-extractor`, `remove-markdown`, `extract-md-headings`, remark/micromark (when to choose us).
3. **Keywords + GitHub topics** — add `extract`, `markdown-links`, `ai-agents`, `regexp-patterns`, `llms`, etc.; topics: `markdown`, `regex`, `javascript`, `nodejs`, `npm-package`.
4. **Downloads + npm badges** — weekly downloads, types included, node engines.

### P1 — AI-agent friendliness (this batch)

5. **`SKILL.md`** — agent checklist: when to use, install, extract recipes, ReDoS notes, link to `llms.txt`.
6. **Ship agent docs in npm `files`** — `llms.txt`, `llms-full.txt`, `AGENTS.md`, `SKILL.md`, `LICENSE`.
7. **Copy-paste recipes** — `examples/recipes/` (links-only, TOC headers, strip-code-then-match) + README section.
8. **MCP-friendly example** — `examples/mcp-tool-shape.ts` showing how an MCP tool would call `extract*` and return JSON.

### P2 — DX (this batch + follow-up)

9. **CLI** — `markdown-regex` bin: `links|headers|images|extract` over file or stdin → JSON. Zero new runtime deps.
10. **Tests for `extract()` + coverage gate** — raise coverage; fail CI under a floor (e.g. 80% lines on `src/`).
11. **CI matrix note** — keep 20/22/24 (already); optionally tighten engines messaging toward 22+ later without breaking 20 yet. **No API break in this batch.**

### P3 — Docs site & release quality (scaffold now, finish later)

12. **Docs scaffold** — `docs/` markdown (+ optional thin `website/` later) wired to [documentation-actions](https://github.com/LLazyEmail/documentation-actions) `SKILL.md` / reusable workflows. First PR: content only, no Pages enablement required.
13. **Changesets / provenance release flow** — model on generate-template: changelog fragments, version PR, provenance publish on merge/release. Scaffold `.changeset/` + docs; do **not** publish from draft PRs.
14. **Hygiene** — retire or migrate ignored `*.test.js`; close/triage stale issues (#9, #14, #178, #179, …).

### P4 — Promotion (human follow-up)

15. **dev.to article** — “Zero-dep Markdown extraction for scripts and AI agents” with install + recipes + when-not-to-use.
16. **Awesome-list PRs** — submit to relevant `awesome-markdown` / regex / Node tooling lists (and LLazyEmail awesome repos where appropriate).
17. **Dependents** — ensure `markdown-to-email` and other LLazyEmail packages depend on published 2.x so download graphs move.

### Explicit non-goals (this batch)

- No breaking API renames (propose only in the tracking issue if needed).
- No merge / npm publish / git tag / release from automation in this workstream.
- No fake secrets or tokens.
- Do not delete README content — only extend and correct.

---

## 3. First PR batch (≈8–12 draft PRs)

Each PR is single-purpose, draft, linked to the tracking issue, CI green, co-authored with petroved.

| # | Branch theme | Outcome |
| --- | --- | --- |
| 1 | README hero + version truth | Correct npm status; 30s example |
| 2 | Comparison table | Alternatives section |
| 3 | Keywords (+ topics via API) | Discoverability |
| 4 | SKILL.md | Agent entrypoint |
| 5 | package `files` for agent docs | Tarball ships llms/AGENTS/SKILL |
| 6 | CLI bin | `markdown-regex` JSON CLI |
| 7 | extract() tests + coverage floor | Quality signal |
| 8 | recipes examples | Copy-paste DX |
| 9 | MCP example | Agent/MCP recipe |
| 10 | Badges (downloads/types) | Trust |
| 11 | Changesets scaffold | Release readiness (no publish) |
| 12 | docs/ scaffold | documentation-actions path |

---

## 4. Success metrics (90 days)

- npm last-month downloads: **113 → 1,000+** (stretch 5k via dependents).
- GitHub stars: 10 → 50+.
- `SKILL.md` / `llms.txt` referenced by at least one external agent workflow.
- Coverage ≥ 80% lines on `src/`; CI green on Node 22 & 24 (20 retained until engines bump).
- One published dev.to (or similar) post + ≥1 awesome-list merge.
