// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_IMAGE } = require('../../src/index');

describe('RegEx: REGEXP_IMAGE', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_IMAGE.test ('> this  is image');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
