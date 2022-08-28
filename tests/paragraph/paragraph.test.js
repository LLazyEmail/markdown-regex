// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_PARAGRAPH } = require('../../src/index');

describe('RegEx: REGEXP_PARAGRAPH', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_PARAGRAPH.test('We have a very diverse line-up of meals for this week');
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
