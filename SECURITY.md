# Security

## Reporting

Email the maintainer or open a private GitHub security advisory on
[LLazyEmail/markdown-regex](https://github.com/LLazyEmail/markdown-regex).
Do not file a public issue for an exploitable ReDoS pattern.

## ReDoS

This package is a set of regular expressions. Untrusted Markdown that is
crafted to trigger catastrophic backtracking can hang a process.

**If you run any of these regexes against untrusted user input in a server
or long-lived process, give the call a timeout** (or run it in a worker
that you can kill). This is the same guidance used by packages such as
[ansi-regex](https://github.com/chalk/ansi-regex).

What we do:

- Patterns are literals with bounded quantifiers where possible.
- `npm test` includes `tests/redos.test.ts`, which rejects nested
  unbounded quantifiers (`(.+)+`, `(.*)*`, and similar) on every exported
  `REGEXP_*` constant.
- Prefer `extractLinks()` / `extract()` over running a global regex on a
  multi-megabyte untrusted blob.
- Factory helpers (`header()`, `link()`, …) return a fresh RegExp each
  call so `lastIndex` cannot leak between requests.

What we do not claim:

- Full CommonMark parsing.
- Immunity to every ReDoS gadget. `safe-regex` / `recheck` are heuristics
  and produce false positives and false negatives.

If you find a hang, send the input string and the export name.

## Recommended usage on untrusted input

```ts
import { extract } from 'markdown-regex';

// Prefer the extract helpers (they use matchAll internally).
const result = extract(userMarkdown);

// Or, if you must use a raw regex, isolate it:
import { header } from 'markdown-regex';
const re = header(); // fresh instance
// run with a timeout / worker
```
