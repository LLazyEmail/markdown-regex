/**
 * Recipe: prefer extract* helpers so fenced/inline code is stripped first.
 * Run: npm run build && node examples/recipes/strip-code-then-match.mjs
 */
import { REGEXP_LINK, extractLinks } from '../../dist/index.js';

const md = 'Real [a](https://ok) and ` [b](https://no) `';

console.log('raw matchAll (includes code):', [...md.matchAll(REGEXP_LINK)].map((m) => m[0]));
console.log('extractLinks (code-aware):', extractLinks(md));
