'use strict';

const { REGEXP_UL_LIST } = require('../../src/index');

describe('REGEXP_UL_LIST', () => {
  test('should match unordered list with asterisk items', () => {
    expect(REGEXP_UL_LIST.test('\n* Item 1\n* Item 2\n')).toBe(true);
  });

  test('should match single unordered list item', () => {
    REGEXP_UL_LIST.lastIndex = 0;
    expect(REGEXP_UL_LIST.test('\n* First item\n')).toBe(true);
  });

  test('should not match ordered list', () => {
    REGEXP_UL_LIST.lastIndex = 0;
    expect(REGEXP_UL_LIST.test('1. First item\n2. Second item')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_UL_LIST.lastIndex = 0;
    expect(REGEXP_UL_LIST.test('plain text')).toBe(false);
  });
});
