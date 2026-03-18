'use strict';

const { REGEXP_HR } = require('../../src/index');

describe('REGEXP_HR', () => {
  test('should match horizontal rule with 5 dashes', () => {
    expect(REGEXP_HR.test('\n-----')).toBe(true);
  });

  test('should match horizontal rule with more than 5 dashes', () => {
    REGEXP_HR.lastIndex = 0;
    expect(REGEXP_HR.test('\n----------')).toBe(true);
  });

  test('should not match fewer than 5 dashes', () => {
    REGEXP_HR.lastIndex = 0;
    expect(REGEXP_HR.test('\n----')).toBe(false);
  });

  test('should not match without newline prefix', () => {
    REGEXP_HR.lastIndex = 0;
    expect(REGEXP_HR.test('-----')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_HR.lastIndex = 0;
    expect(REGEXP_HR.test('plain text')).toBe(false);
  });
});
