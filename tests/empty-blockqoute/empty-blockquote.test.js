import { REGEXP_EMPTY_BLOCKQUOTE } from '../../src/index.js';

describe('RegEx: REGEXP_EMPTY_BLOCKQUOTE', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EMPTY_BLOCKQUOTE.test("> ");
      expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
