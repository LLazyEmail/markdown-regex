// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const {   REGEXP_STRONG } = require('../../src/index');

describe('RegEx: REGEXP_STRONG', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_STRONG.test("As you can see, proper **[data analytics](https://hackernoon.com/data-analytics-is-a-journey-p4k3ugj)**");
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
