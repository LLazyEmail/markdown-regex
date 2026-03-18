'use strict';

const { REGEXP_BLOCKQUOTE } = require('../../src/index');

describe('REGEXP_BLOCKQUOTE', () => {
  test('should match blockquote with > prefix', () => {
    expect(REGEXP_BLOCKQUOTE.test('\n> This is a blockquote')).toBe(true);
  });

  test('should match blockquote with &gt; entity', () => {
    REGEXP_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_BLOCKQUOTE.test('\n&gt; HTML entity blockquote')).toBe(true);
  });

  test('should match blockquote with content', () => {
    REGEXP_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_BLOCKQUOTE.test('\n> this is my new file')).toBe(true);
  });

  test('should not match plain text', () => {
    REGEXP_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_BLOCKQUOTE.test('plain text without prefix')).toBe(false);
  });

  test('should not match text without newline prefix', () => {
    REGEXP_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_BLOCKQUOTE.test('> blockquote without newline')).toBe(false);
  });
});
