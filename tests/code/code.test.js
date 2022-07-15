// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_CODE } = require('../../src/index');

describe('RegEx: REGEXP_CODE', () => {

    test('should match the expected ...', () => {
        let result = REGEXP_CODE.test('this is code');
        expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
