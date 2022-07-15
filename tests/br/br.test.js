// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_BR } = require('../../src/index');

describe('RegEx: REGEXP_BR', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_BR.test('this is br');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
