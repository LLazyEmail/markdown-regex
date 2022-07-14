// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_HR } = require('../../src/index');

describe('RegEx: REGEXP_HR', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_HR.test ('> this  is HR');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
