// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_EM } = require('../../src/index');

describe('RegEx: REGEXP_EM', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EM.test('this  is EM');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
