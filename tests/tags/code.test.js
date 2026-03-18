'use strict';

const { REGEXP_CODE } = require('../../src/index');

describe('REGEXP_CODE', () => {
  test('should match inline code with backticks', () => {
    expect(REGEXP_CODE.test('Use `code` here')).toBe(true);
  });

  test('should match backtick code block', () => {
    REGEXP_CODE.lastIndex = 0;
    expect(REGEXP_CODE.test('`inline code`')).toBe(true);
  });

  test('should match code in sentence', () => {
    REGEXP_CODE.lastIndex = 0;
    expect(REGEXP_CODE.test('Run `npm install` to install')).toBe(true);
  });

  test('should not match text without backticks', () => {
    REGEXP_CODE.lastIndex = 0;
    expect(REGEXP_CODE.test('plain text without code')).toBe(false);
  });
});
