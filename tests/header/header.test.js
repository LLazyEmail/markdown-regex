// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_HEADER } = require('../../src/index');

describe('REGEXP_HEADER', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_HEADER.test ('> this  is header');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
