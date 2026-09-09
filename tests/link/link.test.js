import { REGEXP_LINK } from '../../src/index.js';

describe('RegEx: REGEXP_LINK', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_LINK.test("If interested in receiving leads for paid video calls, [please fill out this Google Form]");
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
