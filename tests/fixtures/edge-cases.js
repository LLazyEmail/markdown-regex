'use strict';

const EDGE_CASES = {
  empty: '',
  whitespaceOnly: '   \n   \t   ',
  nestedMarkdown: '**bold with _italic_ inside**',
  multiplePatterns: '\n# Header\n\n> blockquote\n\n**bold** and _italic_\n',
  specialChars: '!@#$%^&*()[]{}',
  unicode: '# Title with émojis 🚀',
  longText: 'a'.repeat(1000),
  mixedNewlines: '\n\n\nTriple newline',
};

module.exports = { EDGE_CASES };
