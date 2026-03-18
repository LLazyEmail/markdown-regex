/**
 * basic-usage.js
 *
 * Demonstrates how to use markdown-regex patterns to extract
 * various elements from a markdown string.
 *
 * Run with: node examples/basic-usage.js
 */

import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_EM,
  REGEXP_CODE,
  REGEXP_DEL,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
} from 'markdown-regex';

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
* Third unordered item

1. First ordered item
2. Second ordered item
3. Third ordered item
`;

console.log('=== Headers ===');
console.log(markdown.match(REGEXP_HEADER));

console.log('\n=== Links ===');
console.log(markdown.match(REGEXP_LINK));

console.log('\n=== Images ===');
console.log(markdown.match(REGEXP_IMAGE));

console.log('\n=== Bold / Strong ===');
console.log(markdown.match(REGEXP_STRONG));

console.log('\n=== Italic / Emphasis ===');
console.log(markdown.match(REGEXP_EM));

console.log('\n=== Inline Code ===');
console.log(markdown.match(REGEXP_CODE));

console.log('\n=== Strikethrough ===');
console.log(markdown.match(REGEXP_DEL));

console.log('\n=== Blockquotes ===');
console.log(markdown.match(REGEXP_BLOCKQUOTE));

console.log('\n=== Horizontal Rules ===');
console.log(markdown.match(REGEXP_HR));

console.log('\n=== Unordered Lists ===');
console.log(markdown.match(REGEXP_UL_LIST));

console.log('\n=== Ordered Lists ===');
console.log(markdown.match(REGEXP_OL_LIST));
