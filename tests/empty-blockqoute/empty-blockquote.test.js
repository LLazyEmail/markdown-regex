// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_EMPTY_BLOCKQUOTE } = require('../../src/index');

describe('RegEx: REGEXP_EMPTY_BLOCKQUOTE', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EMPTY_BLOCKQUOTE.test ('> this  is empty blockquote');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
