/**
 * Legacy test file — REGEXP_EM was renamed to REGEXP_ITALIC.
 * This file now tests REGEXP_ITALIC against the built package.
 */
const { REGEXP_ITALIC } = require('../../dist/index.cjs');

describe('RegEx: REGEXP_ITALIC (formerly REGEXP_EM)', () => {
  test('should match italic with underscores and surrounding context', () => {
    const result = REGEXP_ITALIC.test(' _Magic Behind Test Automation_ ');
    expect(result).toBe(true);
  });

  test('should match italic with asterisks and surrounding context', () => {
    const result = REGEXP_ITALIC.test(' *italic text* ');
    expect(result).toBe(true);
  });
});
