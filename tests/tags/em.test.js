'use strict';

const { REGEXP_EM } = require('../../src/index');

describe('REGEXP_EM', () => {
  test('should match emphasis with asterisk preceded by space', () => {
    expect(REGEXP_EM.test(' *italic text* ')).toBe(true);
  });

  test('should match emphasis with underscore preceded by space', () => {
    REGEXP_EM.lastIndex = 0;
    expect(REGEXP_EM.test(' _italic text_ ')).toBe(true);
  });

  test('should match emphasis preceded by >', () => {
    REGEXP_EM.lastIndex = 0;
    expect(REGEXP_EM.test('>*italic* text')).toBe(true);
  });

  test('should not match emphasis without surrounding whitespace', () => {
    REGEXP_EM.lastIndex = 0;
    expect(REGEXP_EM.test('*no whitespace*')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_EM.lastIndex = 0;
    expect(REGEXP_EM.test('plain text')).toBe(false);
  });
});
