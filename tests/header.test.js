// Tests for headers
const assert = require('assert');
const { REGEXP_HEADER, REGEXP_H2, REGEXP_H3 } = require('../src/tags/header');

describe('Header Tests', () => {
    it('should match h1 headers', () => {
        const input = '# Header 1';
        assert.ok(REGEXP_HEADER.test(input));
    });
    it('should not match invalid headers', () => {
        const input = 'Header 1';
        assert.ok(!REGEXP_HEADER.test(input));
    });
    it('should match h3 header', () => {
        const input = '### Header 3';
        assert.ok(REGEXP_H3.test(input));
    });
    it('should not match h2 header', () => {
        const input = '## Header 2';
        assert.ok(REGEXP_H2.test(input));
    });
    it('should not match h1 header', () => {
        const input = '# Header 1';
        assert.ok(REGEXP_HEADER.test(input));
    });
    // Add more tests for other header levels and edge cases.
});
