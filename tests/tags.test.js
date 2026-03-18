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
    REGEXP_EM
} = require('../index'); // Adjust the path as necessary

describe('Markdown Regex Tests', () => {
    it('should match header patterns', () => {
        const testCases = [
            { input: '# Header 1', expected: true },
            { input: '## Header 2', expected: true },
            { input: '### Header 3', expected: true },
            { input: 'No header here', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_HEADER.test(input), expected);
        });
    });

    it('should match image patterns', () => {
        const testCases = [
            { input: '![](image.png)', expected: true },
            { input: '![](http://example.com/image.png)', expected: true },
            { input: 'Just text', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_IMAGE.test(input), expected);
        });
    });

    it('should match link patterns', () => {
        const testCases = [
            { input: '[Link](http://example.com)', expected: true },
            { input: 'No link here', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_LINK.test(input), expected);
        });
    });

    it('should match strong patterns', () => {
        const testCases = [
            { input: '**bold text**', expected: true },
            { input: 'Not bold', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_STRONG.test(input), expected);
        });
    });

    it('should match delete patterns', () => {
        const testCases = [
            { input: '~~strikethrough~~', expected: true },
            { input: 'Not strikethrough', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_DEL.test(input), expected);
        });
    });

    it('should match quote patterns', () => {
        const testCases = [
            { input: '> This is a quote', expected: true },
            { input: 'Not a quote', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_Q.test(input), expected);
        });
    });

    it('should match code patterns', () => {
        const testCases = [
            { input: '`inline code`', expected: true },
            { input: 'Not code', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_CODE.test(input), expected);
        });
    });

    it('should match blockquote patterns', () => {
        const testCases = [
            { input: '> Blockquote\nNext line', expected: true },
            { input: 'Not a blockquote', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_BLOCKQUOTE.test(input), expected);
        });
    });

    it('should match horizontal rule patterns', () => {
        const testCases = [
            { input: '---', expected: true },
            { input: 'Not a horizontal rule', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_HR.test(input), expected);
        });
    });

    it('should match paragraph patterns', () => {
        const testCases = [
            { input: 'This is a paragraph.', expected: true },
            { input: '', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_PARAGRAPH.test(input), expected);
        });
    });

    it('should match line break patterns', () => {
        const testCases = [
            { input: 'First line\nSecond line', expected: true },
            { input: 'No break here', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_BR.test(input), expected);
        });
    });

    it('should match empty blockquote patterns', () => {
        const testCases = [
            { input: '> ', expected: true },
            { input: 'Not empty', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_EMPTY_BLOCKQUOTE.test(input), expected);
        });
    });

    it('should match emphasized patterns', () => {
        const testCases = [
            { input: '*italic text*', expected: true },
            { input: 'Not italic', expected: false },
        ];
        testCases.forEach(({ input, expected }) => {
            assert.strictEqual(REGEXP_EM.test(input), expected);
        });
    });
});