import { REGEXP_EMPTY_UL } from '../../src/index.js';

describe('RegEx: REGEXP_EMPTY_UL', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EMPTY_UL.test('1.');
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
