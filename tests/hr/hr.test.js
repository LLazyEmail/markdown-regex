import { REGEXP_HR } from '../../src/index.js';

describe('RegEx: REGEXP_HR', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_HR.test("***");
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
