// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_DEL } = require('../../src/index');

describe('RegEx: REGEXP_DEL', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_DEL.test ('> this  is del');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
