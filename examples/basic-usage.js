/**
 * basic-usage.js
 *
 * Run: npm run build && node examples/basic-usage.js
 */

import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_CODE,
  REGEXP_DEL,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
} from '../dist/index.js';

const markdown = `
# My Document Title

## Introduction

This is a [link to example](https://example.com) and an ![alt text](./image.png).

Here is some **bold text** and _italic text_ and ~~strikethrough~~.

Here is some \`inline code\`.

> This is a blockquote.

-----

* First unordered item
* Second unordered item

1. First ordered item
2. Second ordered item
`;

console.log('=== Headers ===');
console.log(markdown.match(REGEXP_HEADER));

console.log('\n=== Links ===');
console.log(markdown.match(REGEXP_LINK));

console.log('\n=== Images ===');
console.log(markdown.match(REGEXP_IMAGE));

console.log('\n=== Bold ===');
console.log(markdown.match(REGEXP_STRONG));

console.log('\n=== Italic ===');
console.log(markdown.match(REGEXP_ITALIC));

console.log('\n=== Code ===');
console.log(markdown.match(REGEXP_CODE));

console.log('\n=== Strikethrough ===');
console.log(markdown.match(REGEXP_DEL));

console.log('\n=== Blockquotes ===');
console.log(markdown.match(REGEXP_BLOCKQUOTE));

console.log('\n=== HR ===');
console.log(markdown.match(REGEXP_HR));

console.log('\n=== UL ===');
console.log(markdown.match(REGEXP_UL_LIST));

console.log('\n=== OL ===');
console.log(markdown.match(REGEXP_OL_LIST));
