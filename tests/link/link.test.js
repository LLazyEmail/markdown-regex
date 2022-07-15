// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_LINK } = require('../../src/index');

describe('RegEx: REGEXP_LINK', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_LINK.test('this  is link');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
