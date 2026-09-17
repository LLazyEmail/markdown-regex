import { describe, expect, it } from 'vitest';
import { REGEXP_UL_LIST, REGEXP_OL_LIST, REGEXP_EMPTY_UL, REGEXP_EMPTY_OL } from '../src/index';

describe('Markdown Regex Patterns', () => {
  describe('UL List', () => {
    it('should match unordered lists correctly', () => {
      const matchValid = '* Item 1\n* Item 2';
      expect(REGEXP_UL_LIST.test(matchValid)).toBe(true);
    });

    it('should not match invalid unordered lists', () => {
      const invalidMatch = 'Item 1\nItem 2';
      expect(REGEXP_UL_LIST.test(invalidMatch)).toBe(false);
    });

    it('should match empty unordered lists', () => {
      const emptyList = '* ';
      expect(REGEXP_EMPTY_UL.test(emptyList)).toBe(true);
    });
  });

  describe('OL List', () => {
    it('should match ordered lists correctly', () => {
      const matchValid = '1. Item 1\n2. Item 2';
      expect(REGEXP_OL_LIST.test(matchValid)).toBe(true);
    });

    it('should not match invalid ordered lists', () => {
      const invalidMatch = 'Item 1\nItem 2';
      expect(REGEXP_OL_LIST.test(invalidMatch)).toBe(false);
    });

    it('should match empty ordered lists', () => {
      const emptyList = '1. ';
      expect(REGEXP_EMPTY_OL.test(emptyList)).toBe(true);
    });
  });
});