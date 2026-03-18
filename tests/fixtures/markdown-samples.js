'use strict';

const MARKDOWN_SAMPLES = {
  header: '\n# Title\n\nSome paragraph text here.\n\n## Section\n\nMore text.\n',
  image: '![alt text](https://example.com/image.png)',
  link: 'Check out [this link](https://example.com) for more.',
  strong: 'This is **bold text** in a sentence.',
  del: 'This is ~~strikethrough~~ text.',
  code: 'Use `inline code` like this.',
  blockquote: '\n> This is a blockquote.\n',
  hr: '\n-----\n',
  paragraph: '\nThis is a paragraph.\n',
  br: '\nFirst paragraph.\n\nSecond paragraph.\n',
  em: ' _italic text_ here',
  quote: ':"This is a quote":',
  emptyBlockquote: '</blockquote><blockquote>',
  ulList: '\n* Item one\n* Item two\n',
  olList: '\n1. First item\n2. Second item\n',
};

const FULL_MARKDOWN = `
# Main Title

This is a paragraph with **bold**, _italic_, and \`code\`.

> This is a blockquote

## Section

Here is a [link](https://example.com) and an ![image](https://example.com/img.png).

* Unordered item 1
* Unordered item 2

1. Ordered item 1
2. Ordered item 2

-----

~~strikethrough~~ and :"quoted":

`;

module.exports = { MARKDOWN_SAMPLES, FULL_MARKDOWN };
