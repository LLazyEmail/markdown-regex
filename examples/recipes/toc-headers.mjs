/**
 * Recipe: build a flat TOC from ATX headers.
 * Run: npm run build && node examples/recipes/toc-headers.mjs
 */
import { extractHeaders } from '../../dist/index.js';

const md = `# Project

## Install

## Usage

### CLI

### Library
`;

const toc = extractHeaders(md).map(
  (h) => `${'  '.repeat(h.level - 1)}- ${h.text}`,
);
console.log(toc.join('\n'));
