'use strict';

const { REGEXP_PARAGRAPH } = require('../../src/index');

describe('REGEXP_PARAGRAPH', () => {
  test('should match paragraph text between newlines', () => {
    expect(REGEXP_PARAGRAPH.test('\nThis is a paragraph.\n')).toBe(true);
  });

  test('should match paragraph with multiple words', () => {
    REGEXP_PARAGRAPH.lastIndex = 0;
    expect(REGEXP_PARAGRAPH.test('\nThis is some content in a paragraph.\n')).toBe(true);
  });

  test('should not match text without surrounding newlines', () => {
    REGEXP_PARAGRAPH.lastIndex = 0;
    expect(REGEXP_PARAGRAPH.test('text without newlines')).toBe(false);
  });
});
