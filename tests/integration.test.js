'use strict';

const {
    isValidEmail,
    isValidDomain,
    isValidTLD,
    isValidRegex
} = require('../src/index');

// Test Suite for Email Regex Patterns

describe('Email Regex Patterns', () => {
    test('Valid Email Test', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
    });

    test('Invalid Email Test', () => {
        expect(isValidEmail('invalid-email')).toBe(false);
    });
});

// Test Suite for Domain Regex Patterns

describe('Domain Regex Patterns', () => {
    test('Valid Domain Test', () => {
        expect(isValidDomain('example.com')).toBe(true);
    });

    test('Invalid Domain Test', () => {
        expect(isValidDomain('invalid_domain')).toBe(false);
    });
});

// Test Suite for TLD Regex Patterns

describe('TLD Regex Patterns', () => {
    test('Valid TLD Test', () => {
        expect(isValidTLD('com')).toBe(true);
    });

    test('Invalid TLD Test', () => {
        expect(isValidTLD('invalidTLD')).toBe(false);
    });
});

// Test Suite for Regex Functionality

describe('Regex Functionality', () => {
    test('Valid Regex Test', () => {
        expect(isValidRegex(/^\w+@\w+\.\w+$/)).toBe(true);
    });

    test('Invalid Regex Test', () => {
        expect(isValidRegex(/invalid regex/)).toBe(false);
    });
});
