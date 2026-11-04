# Real-world fixtures

Snapshot tests against full markdown documents. The suite lives in
`tests/real-world-fixtures.test.ts` and is run separately from unit tests.

## Layout

```
fixtures/real-world/<name>/
  input.md                  # required — the markdown document
  expected.extract.json     # auto: extract() output (Vitest file snapshot)
  expected.frontmatter.json # auto: parseFrontmatter() summary
  expected.blocks.json      # auto: extractCustomBlocks() output
```

`<name>` is any folder name. The suite discovers every directory under
`fixtures/real-world/` that contains `input.md`.

## Add an example

1. Create a folder: `fixtures/real-world/my-newsletter/`
2. Drop your markdown in as `input.md`
3. Generate snapshots:

   ```bash
   pnpm test:fixtures:update
   ```

4. Commit `input.md` and the three `expected.*.json` files
5. Open a PR — the **Fixtures** CI job will assert the snapshots

No test file edits are required.

## Commands

| Script | What it does |
| --- | --- |
| `pnpm test:fixtures` | Run the fixture suite |
| `pnpm test:fixtures:update` | Update all file snapshots |
| `pnpm exec turbo run test:fixtures` | Same via Turbo |

Unit tests (`pnpm test`) intentionally exclude this suite so snapshot noise
does not slow the default loop.

## First fixture

`source-fullcodetest` is the historic Hacker Noon–style newsletter sample.
The same content remains at the repo root as `source-fullcodetest.md` for
existing unit/integration tests that load it by path.

## Notes

- Frontmatter and flat `:::name` blocks are included so fixtures exercise the
  packages introduced on the turborepo stack (`feat/flat-custom-blocks`).
- Nested custom blocks / email remark rendering are out of scope (see issue #407).
