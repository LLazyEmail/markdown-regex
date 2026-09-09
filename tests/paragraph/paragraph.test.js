import { REGEXP_PARAGRAPH } from '../../src/index.js';

describe('RegEx: REGEXP_PARAGRAPH', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_PARAGRAPH.test('We have a very diverse line-up of meals for this week');
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
