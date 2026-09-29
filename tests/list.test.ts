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
      // REGEXP_EMPTY_UL is an HTML cleanup pattern (</ul><ul>), not markdown.
      expect(REGEXP_EMPTY_UL.test('</ul><ul>')).toBe(true);
      expect(REGEXP_UL_LIST.test('* ')).toBe(true);
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
      // REGEXP_EMPTY_OL is an HTML cleanup pattern (</ol><ol>), not markdown.
      expect(REGEXP_EMPTY_OL.test('</ol><ol>')).toBe(true);
      expect(REGEXP_OL_LIST.test('1. ')).toBe(true);
    });
  });
});
