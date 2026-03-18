'use strict';

const { REGEXP_DEL } = require('../../src/index');

describe('REGEXP_DEL', () => {
  test('should match double tilde strikethrough', () => {
    expect(REGEXP_DEL.test('~~strikethrough~~')).toBe(true);
  });

  test('should match strikethrough in sentence', () => {
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test('This is ~~deleted~~ text.')).toBe(true);
  });

  test('should match strikethrough with content', () => {
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test('~~Hello this is del~~')).toBe(true);
  });

  test('should not match single tilde', () => {
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test('~single tilde~')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test('plain text')).toBe(false);
  });
});
