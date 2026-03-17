// Tests for headers
const assert = require('assert');
const markdownRegex = require('../src/markdownRegex');

describe('Header Tests', () => {
    it('should match h1 headers', () => {
        const input = '# Header 1';
        assert.ok(markdownRegex.h1.test(input));
    });
    it('should not match invalid headers', () => {
        const input = 'Header 1';
        assert.ok(!markdownRegex.h1.test(input));
    });
    // Add more tests for other header levels and edge cases.
});