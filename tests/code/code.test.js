import { REGEXP_CODE } from '../../src/index.js';

describe('RegEx: REGEXP_CODE', () => {

    test('should match the expected ...', () => {
        let result = REGEXP_CODE.test("this is code");
        expect(result).toBe(true);
    });

    // test('', () => {
    // });
    // test('', () => {
    // });
});
