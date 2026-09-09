import { REGEXP_OL_LIST } from '../../src/index.js';

describe('RegEx: REGEXP_OL_LIST', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_OL_LIST.test('1. First item');
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
