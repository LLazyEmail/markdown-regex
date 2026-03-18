'use strict';

const HEADER_SAMPLES = {
  valid: [
    '\n# Header 1',
    '\n## Header 2',
    '\n### Header 3',
    '\n#### Header 4',
    '\n# Combatting Increased Cybersecurity Gaps During The Pandemic',
  ],
  invalid: [
    'No header here',
    'Just plain text',
    '',
  ],
};

const H2_SAMPLES = {
  valid: [
    '## Header 2',
    '## Another Section',
  ],
  invalid: [
    '# Header 1',
    '### Header 3',
    'plain text',
  ],
};

const H3_SAMPLES = {
  valid: [
    '### Header 3',
    '### Deep Section',
  ],
  invalid: [
    '## Header 2',
    '# Header 1',
    'plain text',
  ],
};

module.exports = { HEADER_SAMPLES, H2_SAMPLES, H3_SAMPLES };
