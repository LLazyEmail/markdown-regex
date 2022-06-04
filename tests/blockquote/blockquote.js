// const { resolve } = require('path')
// const root = resolve(__dirname, '')

const { REGEXP_BLOCKQUOTE, REGEXP_EMPTY_BLOCKQUOTE } = require('../../src/index');

describe('RegEx: REGEXP_BLOCKQUOTE', () => {

    test('should match the expected ...', () => {
        let result = REGEXP_BLOCKQUOTE.test('> this is blockquote');
        expect(result).toBe(true);
    });
   // test('', () => {
   // });
   // test('', () => {
   // });
});