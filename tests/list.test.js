const assert = require('assert');
const { REGEXP_UL_LIST, REGEXP_OL_LIST, REGEXP_EMPTY_UL, REGEXP_EMPTY_OL } = require('../src/index'); // Adjust the import according to your file structure

describe('Markdown Regex Patterns', function() {
    describe('UL List', function() {
        it('should match unordered lists correctly', function() {
            const matchValid = "* Item 1\n* Item 2";
            assert.ok(REGEXP_UL_LIST.test(matchValid));
        });

        it('should not match invalid unordered lists', function() {
            const invalidMatch = "Item 1\nItem 2";
            assert.ok(!REGEXP_UL_LIST.test(invalidMatch));
        });

        it('should match empty unordered lists', function() {
            const emptyList = "* "
            assert.ok(REGEXP_EMPTY_UL.test(emptyList));
        });
    });

    describe('OL List', function() {
        it('should match ordered lists correctly', function() {
            const matchValid = "1. Item 1\n2. Item 2";
            assert.ok(REGEXP_OL_LIST.test(matchValid));
        });

        it('should not match invalid ordered lists', function() {
            const invalidMatch = "Item 1\nItem 2";
            assert.ok(!REGEXP_OL_LIST.test(invalidMatch));
        });

        it('should match empty ordered lists', function() {
            const emptyList = "1. "
            assert.ok(REGEXP_EMPTY_OL.test(emptyList));
        });
    });
});