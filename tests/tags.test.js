const assert = require('assert');
const {
    REGEXP_HEADER,
    REGEXP_IMAGE,
    REGEXP_LINK,
    REGEXP_STRONG,
    REGEXP_DEL,
    REGEXP_Q,
    REGEXP_CODE,
    REGEXP_BLOCKQUOTE,
    REGEXP_HR,
    REGEXP_PARAGRAPH,
    REGEXP_BR,
    REGEXP_EMPTY_BLOCKQUOTE,
    REGEXP_ITALIC,
} = require('../dist/index.cjs');

describe('Markdown Regex Tests', () => {
    it('should match header patterns', () => {
        const testCases = [
            { input: '\n# Header 1', expected: true },
            { input: '\n## Header 2', expected: true },
            { input: '\n### Header 3', expected: true },
            { input: 'No header here', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_HEADER.lastIndex = 0;
            assert.strictEqual(REGEXP_HEADER.test(input), expected);
        });
    });

    it('should match image patterns', () => {
        const testCases = [
            { input: '![x](image.png)', expected: true },
            { input: '![x](http://example.com/image.png)', expected: true },
            { input: 'Just text', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_IMAGE.lastIndex = 0;
            assert.strictEqual(REGEXP_IMAGE.test(input), expected);
        });
    });

    it('should match link patterns', () => {
        const testCases = [
            { input: '[Link](http://example.com)', expected: true },
            { input: 'No link here', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_LINK.lastIndex = 0;
            assert.strictEqual(REGEXP_LINK.test(input), expected);
        });
    });

    it('should match strong patterns', () => {
        const testCases = [
            { input: '**bold text**', expected: true },
            { input: 'Not bold', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_STRONG.lastIndex = 0;
            assert.strictEqual(REGEXP_STRONG.test(input), expected);
        });
    });

    it('should match delete patterns', () => {
        const testCases = [
            { input: '~~strikethrough~~', expected: true },
            { input: 'Not strikethrough', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_DEL.lastIndex = 0;
            assert.strictEqual(REGEXP_DEL.test(input), expected);
        });
    });

    it('should match code patterns', () => {
        const testCases = [
            { input: '`inline code`', expected: true },
            { input: 'Not code', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_CODE.lastIndex = 0;
            assert.strictEqual(REGEXP_CODE.test(input), expected);
        });
    });

    it('should match italic patterns', () => {
        const testCases = [
            { input: ' *italic text* ', expected: true },
            { input: 'Not italic', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            REGEXP_ITALIC.lastIndex = 0;
            assert.strictEqual(REGEXP_ITALIC.test(input), expected);
        });
    });
});
