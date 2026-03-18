'use strict';

const { REGEXP_Q } = require('../../src/index');

describe('REGEXP_Q', () => {
  test('should match quoted text with colon-quote syntax', () => {
    expect(REGEXP_Q.test(':"This is a quote":')).toBe(true);
  });

  test('should match quote in sentence', () => {
    REGEXP_Q.lastIndex = 0;
    expect(REGEXP_Q.test('He said :"hello": to me.')).toBe(true);
  });

  test('should not match plain quoted text', () => {
    REGEXP_Q.lastIndex = 0;
    expect(REGEXP_Q.test('"just quoted text"')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_Q.lastIndex = 0;
    expect(REGEXP_Q.test('plain text')).toBe(false);
  });
});
