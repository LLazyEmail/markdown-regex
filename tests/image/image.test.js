// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_IMAGE } = require('../../src/index');

describe('RegEx: REGEXP_IMAGE', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_IMAGE.test("[alt_text](https://github.com/atherdon/newsletters/blob/master/archive/img/memes/october/4/4.jpg "image_tooltip")");
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
