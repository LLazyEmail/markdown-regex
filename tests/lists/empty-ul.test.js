'use strict';

const { REGEXP_EMPTY_UL } = require('../../src/index');

describe('REGEXP_EMPTY_UL', () => {
  test('should match consecutive ul HTML tags', () => {
    expect(REGEXP_EMPTY_UL.test('</ul><ul>')).toBe(true);
  });

  test('should match ul tags with space between', () => {
    REGEXP_EMPTY_UL.lastIndex = 0;
    expect(REGEXP_EMPTY_UL.test('</ul> <ul>')).toBe(true);
  });

  test('should not match ol HTML tags', () => {
    REGEXP_EMPTY_UL.lastIndex = 0;
    expect(REGEXP_EMPTY_UL.test('</ol><ol>')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_EMPTY_UL.lastIndex = 0;
    expect(REGEXP_EMPTY_UL.test('plain text')).toBe(false);
  });

  test('should not match unordered list markdown', () => {
    REGEXP_EMPTY_UL.lastIndex = 0;
    expect(REGEXP_EMPTY_UL.test('* item')).toBe(false);
  });
});
