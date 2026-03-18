'use strict';

const {
    REGEXP_HEADER,
    REGEXP_H2,
    REGEXP_H3,
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
    REGEXP_EM,
    REGEXP_UL_LIST,
    REGEXP_OL_LIST,
    REGEXP_EMPTY_UL,
    REGEXP_EMPTY_OL,
} = require('../src/index');

describe('Integration: all regex patterns are exported', () => {
    test('REGEXP_HEADER is exported', () => {
        expect(REGEXP_HEADER).toBeInstanceOf(RegExp);
    });

    test('REGEXP_H2 is exported', () => {
        expect(REGEXP_H2).toBeInstanceOf(RegExp);
    });

    test('REGEXP_H3 is exported', () => {
        expect(REGEXP_H3).toBeInstanceOf(RegExp);
    });

    test('REGEXP_IMAGE is exported', () => {
        expect(REGEXP_IMAGE).toBeInstanceOf(RegExp);
    });

    test('REGEXP_LINK is exported', () => {
        expect(REGEXP_LINK).toBeInstanceOf(RegExp);
    });

    test('REGEXP_STRONG is exported', () => {
        expect(REGEXP_STRONG).toBeInstanceOf(RegExp);
    });

    test('REGEXP_DEL is exported', () => {
        expect(REGEXP_DEL).toBeInstanceOf(RegExp);
    });

    test('REGEXP_Q is exported', () => {
        expect(REGEXP_Q).toBeInstanceOf(RegExp);
    });

    test('REGEXP_CODE is exported', () => {
        expect(REGEXP_CODE).toBeInstanceOf(RegExp);
    });

    test('REGEXP_BLOCKQUOTE is exported', () => {
        expect(REGEXP_BLOCKQUOTE).toBeInstanceOf(RegExp);
    });

    test('REGEXP_HR is exported', () => {
        expect(REGEXP_HR).toBeInstanceOf(RegExp);
    });

    test('REGEXP_PARAGRAPH is exported', () => {
        expect(REGEXP_PARAGRAPH).toBeInstanceOf(RegExp);
    });

    test('REGEXP_BR is exported', () => {
        expect(REGEXP_BR).toBeInstanceOf(RegExp);
    });

    test('REGEXP_EMPTY_BLOCKQUOTE is exported', () => {
        expect(REGEXP_EMPTY_BLOCKQUOTE).toBeInstanceOf(RegExp);
    });

    test('REGEXP_EM is exported', () => {
        expect(REGEXP_EM).toBeInstanceOf(RegExp);
    });

    test('REGEXP_UL_LIST is exported', () => {
        expect(REGEXP_UL_LIST).toBeInstanceOf(RegExp);
    });

    test('REGEXP_OL_LIST is exported', () => {
        expect(REGEXP_OL_LIST).toBeInstanceOf(RegExp);
    });

    test('REGEXP_EMPTY_UL is exported', () => {
        expect(REGEXP_EMPTY_UL).toBeInstanceOf(RegExp);
    });

    test('REGEXP_EMPTY_OL is exported', () => {
        expect(REGEXP_EMPTY_OL).toBeInstanceOf(RegExp);
    });
});

describe('Integration: regex patterns work correctly on full markdown', () => {
    const fullMarkdown = '\n# Title\n\nA paragraph with **bold** and `code`.\n\n> blockquote\n\n* Item 1\n* Item 2\n\n1. First\n\n[link](https://example.com) and ![img](image.png)\n\n~~del~~ and :"quote":\n\n-----\n\n _em_ \n\n';

    test('REGEXP_HEADER matches title in full markdown', () => {
        REGEXP_HEADER.lastIndex = 0;
        expect(REGEXP_HEADER.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_STRONG matches bold in full markdown', () => {
        REGEXP_STRONG.lastIndex = 0;
        expect(REGEXP_STRONG.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_CODE matches inline code in full markdown', () => {
        REGEXP_CODE.lastIndex = 0;
        expect(REGEXP_CODE.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_BLOCKQUOTE matches blockquote in full markdown', () => {
        REGEXP_BLOCKQUOTE.lastIndex = 0;
        expect(REGEXP_BLOCKQUOTE.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_UL_LIST matches unordered list in full markdown', () => {
        REGEXP_UL_LIST.lastIndex = 0;
        expect(REGEXP_UL_LIST.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_OL_LIST matches ordered list in full markdown', () => {
        REGEXP_OL_LIST.lastIndex = 0;
        expect(REGEXP_OL_LIST.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_LINK matches link in full markdown', () => {
        REGEXP_LINK.lastIndex = 0;
        expect(REGEXP_LINK.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_IMAGE matches image in full markdown', () => {
        REGEXP_IMAGE.lastIndex = 0;
        expect(REGEXP_IMAGE.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_DEL matches strikethrough in full markdown', () => {
        REGEXP_DEL.lastIndex = 0;
        expect(REGEXP_DEL.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_Q matches quote in full markdown', () => {
        REGEXP_Q.lastIndex = 0;
        expect(REGEXP_Q.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_HR matches horizontal rule in full markdown', () => {
        REGEXP_HR.lastIndex = 0;
        expect(REGEXP_HR.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_BR matches double newline in full markdown', () => {
        REGEXP_BR.lastIndex = 0;
        expect(REGEXP_BR.test(fullMarkdown)).toBe(true);
    });

    test('REGEXP_EM matches emphasis in full markdown', () => {
        REGEXP_EM.lastIndex = 0;
        expect(REGEXP_EM.test(fullMarkdown)).toBe(true);
    });
});
