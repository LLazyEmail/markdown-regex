'use strict';

const LIST_SAMPLES = {
  ul: {
    valid: [
      '\n* Item 1\n* Item 2\n',
      '\n* First item\n',
      '\n    * Nested item\n',
    ],
    invalid: [
      'Item 1\nItem 2',
      '1. Ordered item',
      'plain text',
    ],
  },
  ol: {
    valid: [
      '\n1. First item',
      '\n2. Second item',
      '\n10. Tenth item',
    ],
    invalid: [
      '* Unordered item',
      'plain text',
      '',
    ],
  },
  emptyUl: {
    valid: [
      '</ul><ul>',
      '</ul> <ul>',
    ],
    invalid: [
      '</ol><ol>',
      'plain text',
      '* item',
    ],
  },
  emptyOl: {
    valid: [
      '</ol><ol>',
      '</ol> <ol>',
    ],
    invalid: [
      '</ul><ul>',
      'plain text',
      '1. item',
    ],
  },
};

module.exports = { LIST_SAMPLES };
