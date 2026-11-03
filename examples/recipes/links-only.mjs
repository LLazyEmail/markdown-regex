/**
 * Recipe: extract every Markdown link as { text, url }.
 * Run: npm run build && node examples/recipes/links-only.mjs
 */
import { extractLinks } from '../../dist/index.js';

const md = `
# Spec

See the [guide](https://example.com/guide) and [API](https://example.com/api).

Inside a fence is ignored:

\`\`\`
[nope](https://ignored.test)
\`\`\`
`;

console.log(extractLinks(md));
// [{ text: 'guide', url: 'https://example.com/guide' }, { text: 'API', url: '...' }]
