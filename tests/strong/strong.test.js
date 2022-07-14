// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const {   REGEXP_STRONG } = require('../../src/index');

describe('RegEx: REGEXP_STRONG', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_STRONG.test ('> this  is strong');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
