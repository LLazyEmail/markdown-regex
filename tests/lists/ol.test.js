'use strict';

const { REGEXP_OL_LIST } = require('../../src/index');

describe('REGEXP_OL_LIST', () => {
  test('should match ordered list item', () => {
    expect(REGEXP_OL_LIST.test('\n1. First item')).toBe(true);
  });

  test('should match multi-digit ordered list item', () => {
    REGEXP_OL_LIST.lastIndex = 0;
    expect(REGEXP_OL_LIST.test('\n10. Tenth item')).toBe(true);
  });

  test('should not match unordered list', () => {
    REGEXP_OL_LIST.lastIndex = 0;
    expect(REGEXP_OL_LIST.test('* Unordered item')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_OL_LIST.lastIndex = 0;
    expect(REGEXP_OL_LIST.test('plain text')).toBe(false);
  });
});
