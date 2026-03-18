'use strict';

const { REGEXP_EMPTY_OL } = require('../../src/index');

describe('REGEXP_EMPTY_OL', () => {
  test('should match consecutive ol HTML tags', () => {
    expect(REGEXP_EMPTY_OL.test('</ol><ol>')).toBe(true);
  });

  test('should match ol tags with space between', () => {
    REGEXP_EMPTY_OL.lastIndex = 0;
    expect(REGEXP_EMPTY_OL.test('</ol> <ol>')).toBe(true);
  });

  test('should not match ul HTML tags', () => {
    REGEXP_EMPTY_OL.lastIndex = 0;
    expect(REGEXP_EMPTY_OL.test('</ul><ul>')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_EMPTY_OL.lastIndex = 0;
    expect(REGEXP_EMPTY_OL.test('plain text')).toBe(false);
  });

  test('should not match ordered list markdown', () => {
    REGEXP_EMPTY_OL.lastIndex = 0;
    expect(REGEXP_EMPTY_OL.test('1. item')).toBe(false);
  });
});
