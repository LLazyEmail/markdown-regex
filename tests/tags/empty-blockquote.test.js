'use strict';

const { REGEXP_EMPTY_BLOCKQUOTE } = require('../../src/index');

describe('REGEXP_EMPTY_BLOCKQUOTE', () => {
  test('should match consecutive blockquote HTML tags', () => {
    expect(REGEXP_EMPTY_BLOCKQUOTE.test('</blockquote><blockquote>')).toBe(true);
  });

  test('should match in HTML content', () => {
    REGEXP_EMPTY_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_EMPTY_BLOCKQUOTE.test('<p>text</p></blockquote><blockquote><p>more</p>')).toBe(true);
  });

  test('should not match separate blockquote tags', () => {
    REGEXP_EMPTY_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_EMPTY_BLOCKQUOTE.test('</blockquote> <blockquote>')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_EMPTY_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_EMPTY_BLOCKQUOTE.test('plain text')).toBe(false);
  });

  test('should not match markdown blockquote', () => {
    REGEXP_EMPTY_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_EMPTY_BLOCKQUOTE.test('> blockquote')).toBe(false);
  });
});
