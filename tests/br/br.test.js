// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_BR } = require('../../src/index');

describe('RegEx: REGEXP_BR', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_BR.test("**AD Link: [(https://bit.ly/3pGj1Zq)]</br>AD Copy: Buy NordVPN's 2-year plan and get +3 months for free. **");
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
