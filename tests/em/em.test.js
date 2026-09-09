import { REGEXP_EM } from '../../src/index.js';

describe('RegEx: REGEXP_EM', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EM.test("_Magic Behind Test Automation_");
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
