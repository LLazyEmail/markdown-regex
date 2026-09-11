# Publishing markdown-regex 2.0.0

## Checklist before first 2.0 publish

- [ ] Merge PR #339 (hygiene + ts-jest suite + fixture tests)
- [ ] Run `HYGIENE.md` deletions (legacy JS / dead config / old tests)
- [ ] `npm install && npm run typecheck && npm run build && npm test`
- [ ] `npm run pack:check` — confirm only `dist/`, LICENSE, readme, CHANGELOG
- [ ] Repo secret **`npm_token`** set (npm Access Token with publish rights)
- [ ] Optional: enable npm provenance (workflow already passes `--provenance`)

## Publish via GitHub Release (recommended)

1. Ensure `package.json` version matches the tag (e.g. `2.0.0`).
2. Create a GitHub Release:
   - Tag: `v2.0.0`
   - Title: `v2.0.0`
   - Body: paste the `[2.0.0]` section from `CHANGELOG.md`
3. Publishing the release triggers `.github/workflows/npm-publish.yml`.

## Publish manually

```bash
npm login   # or set NODE_AUTH_TOKEN
npm run prepublishOnly
npm publish --access public
```

## After publish

- Verify: https://www.npmjs.com/package/markdown-regex
- Smoke install:

```bash
npm install markdown-regex@2.0.0
node -e "const m=require('markdown-regex'); console.log(m.REGEXP_ITALIC)"
```

## Version policy

- **2.x** — TypeScript / tsup packaging; `REGEXP_ITALIC` naming
- Patch (2.0.x) — bugfixes to patterns or docs
- Minor (2.x.0) — new patterns / addons without breaking exports
- Major (3.x) — intentional breaking API changes
