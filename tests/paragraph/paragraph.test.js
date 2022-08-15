// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_PARAGRAPH } = require('../../src/index');

describe('RegEx: REGEXP_PARAGRAPH', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_PARAGRAPH.test('## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
