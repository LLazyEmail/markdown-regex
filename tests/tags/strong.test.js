'use strict';

const { REGEXP_STRONG } = require('../../src/index');

describe('REGEXP_STRONG', () => {
  test('should match double asterisk bold', () => {
    expect(REGEXP_STRONG.test('**bold text**')).toBe(true);
  });

  test('should match double underscore bold', () => {
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test('__bold text__')).toBe(true);
  });

  test('should match bold in sentence', () => {
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test('This is **important** content.')).toBe(true);
  });

  test('should not match single asterisk', () => {
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test('*italic text*')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test('plain text')).toBe(false);
  });
});
