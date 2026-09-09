import { REGEXP_HEADER } from '../../src/index.js';

describe('REGEXP_HEADER', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_HEADER.test("Combatting Increased Cybersecurity Gaps During The Pandemic");
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
