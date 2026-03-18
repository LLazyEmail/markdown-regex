'use strict';

const { REGEXP_BR } = require('../../src/index');

describe('REGEXP_BR', () => {
  test('should match double newline', () => {
    expect(REGEXP_BR.test('paragraph one\n\nparagraph two')).toBe(true);
  });

  test('should match multiple newlines', () => {
    REGEXP_BR.lastIndex = 0;
    expect(REGEXP_BR.test('text\n\n\nmore text')).toBe(true);
  });

  test('should not match single newline', () => {
    REGEXP_BR.lastIndex = 0;
    expect(REGEXP_BR.test('line one\nline two')).toBe(false);
  });

  test('should not match plain text without newlines', () => {
    REGEXP_BR.lastIndex = 0;
    expect(REGEXP_BR.test('plain text')).toBe(false);
  });
});
