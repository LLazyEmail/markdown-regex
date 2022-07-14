// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_Q } = require('../../src/index');

describe('RegEx: REGEXP_Q', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_Q.test ('> this  is q');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
