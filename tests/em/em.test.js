// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_EM } = require('../../src/index');

describe('RegEx: REGEXP_EM', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_EM.test('## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
