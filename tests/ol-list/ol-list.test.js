// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_OL_LIST } = require('../../src/index');

describe('RegEx: REGEXP_OL_LIST', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_OL_LIST.test ('> this  is ol_list');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
