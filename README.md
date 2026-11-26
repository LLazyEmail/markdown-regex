# markdown-regex

Zero-dependency, TypeScript-typed RegExp patterns for extracting headers, links, images, lists and code from Markdown.

[![npm version](https://img.shields.io/npm/v/markdown-regex.svg)](https://www.npmjs.com/package/markdown-regex)
[![npm downloads](https://img.shields.io/npm/dw/markdown-regex.svg)](https://www.npmjs.com/package/markdown-regex)
[![node](https://img.shields.io/node/v/markdown-regex)](https://www.npmjs.com/package/markdown-regex)
[![types](https://img.shields.io/npm/types/markdown-regex)](https://www.npmjs.com/package/markdown-regex)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

[![CI](https://github.com/LLazyEmail/markdown-regex/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/ci.yml)
[![Fixtures](https://github.com/LLazyEmail/markdown-regex/actions/workflows/fixtures.yml/badge.svg?branch=main)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/fixtures.yml)
[![GitHub release](https://img.shields.io/github/v/release/LLazyEmail/markdown-regex)](https://github.com/LLazyEmail/markdown-regex/releases)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen?logo=renovatebot)](https://github.com/LLazyEmail/markdown-regex/issues/2)
[![Snyk](https://snyk.io/test/github/LLazyEmail/markdown-regex/badge.svg)](https://snyk.io/test/github/LLazyEmail/markdown-regex)
[![Socket](https://badge.socket.dev/npm/package/markdown-regex)](https://socket.dev/npm/package/markdown-regex)
[![unpacked size](https://img.shields.io/npm/unpacked-size/markdown-regex)](https://www.npmjs.com/package/markdown-regex)
[![coverage](https://img.shields.io/badge/coverage-vitest%20v8-informational)](https://github.com/LLazyEmail/markdown-regex/actions/workflows/ci.yml)

The Bundlephobia size badge is often rate-limited, so the unpacked-size badge above is shown instead. The [Bundlephobia page](https://bundlephobia.com/package/markdown-regex) is still available.

**Install (30 seconds):**

```bash
npm install markdown-regex
```

```ts
import { extractLinks, extractHeaders } from 'markdown-regex';

extractLinks('[docs](https://example.com)');
// [{ text: 'docs', url: 'https://example.com' }]

extractHeaders('# Hello\n## World');
// [{ level: 1, text: 'Hello' }, { level: 2, text: 'World' }]
```

Requires **Node.js 20+**. CI builds on **Node 20, 22, and 24**.

- Agent guide: [AGENTS.md](./AGENTS.md) · Contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Full API: [llms-full.txt](./llms-full.txt) · Short: [llms.txt](./llms.txt)
- Source index: [src/index.ts](./src/index.ts)
- Changesets: [`.changeset/README.md`](./.changeset/README.md) · [Releases](#releases)

## Contents

- [When to use this](#when-to-use-this)
- [Status and versions](#status-and-versions)
- [Packages](#packages)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Comparison](#comparison)
- [Monorepo](#monorepo)
- [Source layout](#source-layout)
- [Limitations](#limitations)
- [Recipes](#recipes)
- [CLI](#cli)
- [Development](#development)
- [CI / GitHub Actions](#ci--github-actions)
- [Releases](#releases)
- [Docs](#docs)
- [MCP / AI agents](#mcp--ai-agents)
- [Related](#related)
- [License](#license)
- [Real-world fixtures](#real-world-fixtures)

## When to use this

**Use `markdown-regex` for** quick extraction, linting, or lightweight transforms — especially in scripts and AI-agent tool calls that want JSON, not an AST.

**Do not use it when** you need an AST or CommonMark compliance. Use remark, micromark, or markdown-it.

## Status and versions

The [npm version](https://www.npmjs.com/package/markdown-regex) and [GitHub release](https://github.com/LLazyEmail/markdown-regex/releases) badges above are the live values. As of this writing that is **2.2.2**.

| Channel | Version | Notes |
|---|---|---|
| npm `latest` | **2.2.2** | TypeScript, ESM + CJS, provenance-signed. The 2.2.x line includes the `frontmatter`, `blocks` and `email` subpaths. |
| GitHub `main` | **2.2.2** | Same release line. Unreleased Changesets ship in the next [*Version packages*](#releases) PR. |
| Package name | `markdown-regex` | Same name on GitHub and npm |

The earlier figures in this table (**2.1.1** on npm and **2.2.0** on `main`) were written before 2.2.2 shipped: 2.1.1 was the first TypeScript provenance release, and 2.2.0 introduced the subpaths.

```bash
npm install markdown-regex
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



## Comparison

| Library | Job | Deps | Typed extract helpers | When to pick it |
| --- | --- | --- | --- | --- |
| **markdown-regex** (this) | RegExp constants + `extract*` | **0** | Yes (`links` / `headers` / `images` / full `extract`) | Lint, scripts, AI-agent tools, cheap transforms |
| [markdown-link-extractor](https://www.npmjs.com/package/markdown-link-extractor) | Links only | small | Links | You only need URLs from Markdown |
| [remove-markdown](https://www.npmjs.com/package/remove-markdown) | Strip markup → plain text | 0 | No | Plain-text previews / search indexing |
| [extract-md-headings](https://www.npmjs.com/package/extract-md-headings) | Headings only | small | Headings | TOC-like heading lists |
| [remark](https://www.npmjs.com/package/remark) / [micromark](https://www.npmjs.com/package/micromark) / [markdown-it](https://www.npmjs.com/package/markdown-it) | Full parse / AST | ecosystem | Via AST | Spec compliance, rendering, complex transforms |

`markdown-regex` is **not** a CommonMark parser. Prefer remark/micromark/markdown-it when you need an AST.

## Packages

Only the public `markdown-regex` package is published to npm. The `@markdown-regex/*` workspace packages are private and are bundled into that tarball.

| Package | Import | Docs |
| --- | --- | --- |
| `markdown-regex` | `markdown-regex` | this README · [npm](https://www.npmjs.com/package/markdown-regex) |
| `@markdown-regex/core` | bundled into `markdown-regex` | [packages/core/README.md](./packages/core/README.md) |
| `@markdown-regex/frontmatter` | `markdown-regex/frontmatter` | [packages/frontmatter/README.md](./packages/frontmatter/README.md) · [docs/frontmatter.md](./docs/frontmatter.md) |
| `@markdown-regex/blocks` | `markdown-regex/blocks` | [packages/blocks/README.md](./packages/blocks/README.md) · [docs/blocks.md](./docs/blocks.md) |
| `@markdown-regex/email` | `markdown-regex/email` | [packages/email/README.md](./packages/email/README.md) |

## Monorepo

pnpm workspaces + Turborepo. Private packages `@markdown-regex/core`, `frontmatter`, `blocks`, and `email` are bundled into the public `markdown-regex` package. Subpath imports:

```ts
import { extract } from 'markdown-regex';
import { parseFrontmatter } from 'markdown-regex/frontmatter'; // see docs/frontmatter.md
import { extractCustomBlocks } from 'markdown-regex/blocks';
import { prepareForEmail } from 'markdown-regex/email';
import { REGEXP_EMPTY_UL } from 'markdown-regex/cleanup';
```

## Source layout

RegExp literals live in `src/patterns/` (block / inline / cleanup). Legacy folders under `src/tags/`, `src/lists/`, `src/code/`, and `src/html/` only re-export those constants so older relative imports keep working.

`dist/` is generated by `npm run build` and is gitignored — do not commit built artifacts.

## Limitations

- Nested emphasis is not fully handled.
- `REGEXP_LINK` on raw Markdown matches inside code. Use `extractLinks()`.
- Reference links and setext headers are not matched.
- See [SECURITY.md](./SECURITY.md) for ReDoS. CI runs `tests/redos.test.ts` on every exported pattern.

## Recipes

Copy-paste samples under [`examples/recipes/`](./examples/recipes/):

- Links → JSON: `examples/recipes/links-only.mjs`
- Header TOC: `examples/recipes/toc-headers.mjs`
- Code-aware vs raw regex: `examples/recipes/strip-code-then-match.mjs`

## CLI

```bash
npx markdown-regex links README.md
npx markdown-regex headers doc.md
npx markdown-regex images doc.md
npx markdown-regex extract doc.md
cat doc.md | npx markdown-regex links
```

Prints JSON. No extra runtime dependencies.

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

## CI / GitHub Actions

| Workflow | File | Runs on | What it does |
| --- | --- | --- | --- |
| CI | `ci.yml` | Every PR, push to `main` | On Node 20, 22 and 24: `pnpm install --frozen-lockfile`, lint, then Turbo typecheck, build and test for packages changed since `main`. |
| Fixtures | `fixtures.yml` | PRs, nightly (05:17 UTC), manual | Builds, then runs the real-world snapshot tests (`pnpm test:fixtures`). A red nightly run means a fixture snapshot changed on `main`. |
| Add changeset | `add-changeset.yml` | Manual | Opens a PR with a `.changeset/*.md` file for the chosen package and bump type, for when you don't want to run `pnpm changeset` locally. |
| Add changeset for bot dependency PRs | `add-bot-changeset.yml` | Renovate or Dependabot PRs that change `package.json` or `pnpm-lock.yaml` | Commits a patch changeset to the PR branch if it doesn't already have one, so *Version packages* can release the update. Skips pnpm `packageManager` bumps and GitHub Actions-only PRs. If Renovate rebases and drops the file, the workflow writes it again. |
| Version packages | `changesets.yml` | Push to `main` | `changesets/action` keeps a *Version packages* PR open while unreleased changesets exist. Merging that PR tags `markdown-regex@x.y.z`, creates the GitHub Release and starts *Publish to npm*. |
| Publish to npm | `npm-publish.yml` | A published release, or manual | Typecheck, build, test and `pnpm pack --dry-run`, then `pnpm publish --provenance` using npm trusted publishing (OIDC), so no `NPM_TOKEN` secret is needed. |
| Auto-rebase open PRs | `auto-rebase-prs.yml` | Push to `main`, every 6 hours, manual | Calls `reusable-auto-rebase.yml` from documentation-actions. Behind PRs get GitHub's update-branch. Conflicting PRs get one comment per head SHA listing the files. Renovate and Dependabot PRs are handed back to the bot instead (`delegate-bot-rebase`): Renovate's rebase checkbox is ticked, so Renovate rebases and regenerates `pnpm-lock.yaml` itself. A manual dispatch with `rebase-conflicts: true` does a real rebase for the other PRs. Conflicting PRs also get the `has-conflicts` label and turn the run red (`fail-on-skipped-conflicts`; for reported conflicts this needs the DA release after v2.16.0), and PRs with failing checks get `checks-failing` plus a *Checks not green* column in the run summary. Failing check names need the `AUTO_REBASE_TOKEN` secret (a personal access token that can read checks); without it the workflow uses GitHub's "unstable" merge state. |
| CodeQL | `codeql-analysis.yml` | Push to `main`, weekly (Sunday 23:37 UTC) | GitHub code scanning; findings show under Security → Code scanning. |
| Semgrep | `semgrep.yml` | Push to `main`, weekly (Wednesday 15:22 UTC) | Semgrep scan uploaded as SARIF to code scanning. |
| ESLint (disabled), Node.js CI (disabled) | `eslint.yml`, `node.js.yml` | Manual only | Placeholders that just print "Use the CI workflow instead"; their old failed runs from September are historical. |

**Dependency updates.** Renovate (`renovate.json`) opens the regular version-update PRs; Dependabot only runs security updates (there is no `dependabot.yml`). Package updates get a patch changeset automatically (`add-bot-changeset.yml`) so they show up in the next *Version packages* PR and changelog. A changeset is not added for pnpm `packageManager` bumps or GitHub Actions-only PRs. When a vulnerable package is only reachable through a dependency that pins an old major, Dependabot fails with `security_update_not_possible`; fix it with a pnpm `overrides` entry in `pnpm-workspace.yaml`. The current override forces `minimatch@<11.0.1` to `^11.0.5` because eslint 10 still pins minimatch 10 (GHSA-g3hv-75wg-m249). Remove it once eslint moves to minimatch 11. If a Renovate PR conflicts (for example over `minimumReleaseAgeExclude` in `pnpm-workspace.yaml`), don't rebase it by hand. Tick its "rebase/retry" checkbox, or let the auto-rebase workflow tick it, and Renovate regenerates the branch.

[↑ Back to top](#markdown-regex)

## Releases

Releases use [Changesets](https://github.com/changesets/changesets). The fragment format is in [`.changeset/README.md`](./.changeset/README.md). Human changes use `pnpm changeset` or [Actions → Add changeset](https://github.com/LLazyEmail/markdown-regex/actions/workflows/add-changeset.yml). Renovate and Dependabot package updates get a patch fragment automatically. See also [CONTRIBUTING.md](./CONTRIBUTING.md) and [AGENTS.md](./AGENTS.md).

1. Merge the change (and its `.changeset/*.md` fragment) to `main`.
2. `changesets.yml` opens a *Version packages* PR that bumps `package.json` and the changelogs.
3. Merge that PR to tag `markdown-regex@x.y.z`, create the GitHub Release, and start [Publish to npm](https://github.com/LLazyEmail/markdown-regex/actions/workflows/npm-publish.yml).

## Docs

Scaffold: [`docs/`](./docs/) (Docusaurus via documentation-actions coming next).

## MCP / AI agents

Example tool shape (JSON in, JSON out): [`examples/mcp-tool-shape.ts`](./examples/mcp-tool-shape.ts).

Also see [AGENTS.md](./AGENTS.md) and [llms.txt](./llms.txt).

## Related

- NPM: https://www.npmjs.com/package/markdown-regex
- Used by: https://github.com/LLazyEmail/markdown-to-email
- Article: https://hackernoon.com/open-sourcing-regular-expressions-for-markdown-syntax-module
- Agent guide: https://github.com/LLazyEmail/markdown-regex/blob/main/AGENTS.md
- Full API: https://github.com/LLazyEmail/markdown-regex/blob/main/llms-full.txt
- Source index: https://github.com/LLazyEmail/markdown-regex/blob/main/src/index.ts

## License

MIT

## Real-world fixtures

Full-document snapshot tests live under `fixtures/real-world/`. Run them with:

```bash
pnpm test:fixtures          # assert
pnpm test:fixtures:update    # update snapshots
```

See [fixtures/README.md](./fixtures/README.md). CI runs these in a separate **Fixtures** workflow (PRs + nightly).

[↑ Back to top](#markdown-regex)
