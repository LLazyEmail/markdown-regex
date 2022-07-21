// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_HEADER } = require('../../src/index');

describe('REGEXP_HEADER', () => {

    test('should match the expected ...', () => {
      let result = REGEXP_HEADER.test("Combatting Increased Cybersecurity Gaps During The Pandemic");
      expect(result).toBe(true);
    });

   // test('', () => {
   // });
   // test('', () => {
   // });
});
