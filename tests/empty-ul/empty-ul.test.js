// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_EMPTY_UL } = require('../../src/index');

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
