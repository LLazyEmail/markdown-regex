import { REGEXP_EMPTY_OL } from '../../src/index.js';

describe('RegEx: REGEXP_EMPTY_OL', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EMPTY_OL.test('- ');
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
