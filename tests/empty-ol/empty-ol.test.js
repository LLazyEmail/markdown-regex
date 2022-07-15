// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_EMPTY_OL } = require('../../src/index');

describe('RegEx: REGEXP_EMPTY_OL', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EMPTY_OL.test('this  is empty ol');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
