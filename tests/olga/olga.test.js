// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_BLOCKQUOTE } = require("../../src/index");

describe("RegEx: REGEXP_BLOCKQUOTE", () => {
  test("should match the expected ...", () => {
    let result = REGEXP_BLOCKQUOTE.test("\n> this is my new file");
    expect(result).toBe(true);
  });

  // test('', () => {
  // });

  // test('', () => {
  // });
});
