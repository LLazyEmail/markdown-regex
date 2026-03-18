'use strict';

const { REGEXP_HEADER, REGEXP_H2, REGEXP_H3 } = require('../../src/index');

describe('REGEXP_HEADER', () => {
  test('should match h1 header', () => {
    expect(REGEXP_HEADER.test('\n# Header 1')).toBe(true);
  });

  test('should match h2 header with newline prefix', () => {
    REGEXP_HEADER.lastIndex = 0;
    expect(REGEXP_HEADER.test('\n## Header 2')).toBe(true);
  });

  test('should match h3 header with newline prefix', () => {
    REGEXP_HEADER.lastIndex = 0;
    expect(REGEXP_HEADER.test('\n### Header 3')).toBe(true);
  });

  test('should match h1 header with content', () => {
    REGEXP_HEADER.lastIndex = 0;
    expect(REGEXP_HEADER.test('\n# Combatting Increased Cybersecurity Gaps')).toBe(true);
  });

  test('should not match plain text without newline prefix', () => {
    REGEXP_HEADER.lastIndex = 0;
    expect(REGEXP_HEADER.test('plain text')).toBe(false);
  });
});

describe('REGEXP_H2', () => {
  test('should match h2 header', () => {
    expect(REGEXP_H2.test('## Header 2')).toBe(true);
  });

  test('should not match h1 header', () => {
    REGEXP_H2.lastIndex = 0;
    expect(REGEXP_H2.test('# Header 1')).toBe(false);
  });

  test('should not match h3 header', () => {
    REGEXP_H2.lastIndex = 0;
    expect(REGEXP_H2.test('### Header 3')).toBe(false);
  });
});

describe('REGEXP_H3', () => {
  test('should match h3 header', () => {
    expect(REGEXP_H3.test('### Header 3')).toBe(true);
  });

  test('should not match h2 header', () => {
    REGEXP_H3.lastIndex = 0;
    expect(REGEXP_H3.test('## Header 2')).toBe(false);
  });

  test('should not match h1 header', () => {
    REGEXP_H3.lastIndex = 0;
    expect(REGEXP_H3.test('# Header 1')).toBe(false);
  });
});
