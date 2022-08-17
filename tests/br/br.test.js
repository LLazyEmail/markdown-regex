// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_BR } = require('../../src/index');

describe('RegEx: REGEXP_BR', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_BR.test("**They want to change this AD Copy to: Black Friday ONLY! Buy NordVPN's 2-year plan and get +3 months FREE**");
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
