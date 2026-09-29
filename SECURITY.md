# Security

## Reporting

Email the maintainer or open a private GitHub security advisory on
[LLazyEmail/markdown-regex](https://github.com/LLazyEmail/markdown-regex).
Do not file a public issue for an exploitable ReDoS pattern.

## ReDoS

This package is a set of regular expressions. Untrusted Markdown that is
crafted to trigger catastrophic backtracking can hang a process.

What we do:

- Patterns are literals with bounded quantifiers where possible.
- `npm test` includes `tests/redos.test.ts`, which rejects nested
  unbounded quantifiers (`(.+)+`, `(.*)*`, and similar) on every exported
  `REGEXP_*` constant.
- Prefer `extractLinks()` / `extract()` over running a global regex on a
  multi-megabyte untrusted blob.

What we do not claim:

- Full CommonMark parsing.
- Immunity to every ReDoS gadget. `safe-regex` / `recheck` are heuristics
  and produce false positives and false negatives.

If you find a hang, send the input string and the export name.
