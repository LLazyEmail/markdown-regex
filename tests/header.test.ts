import { beforeEach, describe, expect, it } from 'vitest';
import { REGEXP_HEADER, REGEXP_H2, REGEXP_H3 } from '../src/index';

// Global regexes carry state via lastIndex; reset before each test to avoid flakiness.
beforeEach(() => {
  REGEXP_HEADER.lastIndex = 0;
  REGEXP_H2.lastIndex = 0;
  REGEXP_H3.lastIndex = 0;
});

describe('Header Tests', () => {
  it('should match h1 headers', () => {
    const input = '# Header 1';
    expect(REGEXP_HEADER.test(input)).toBe(true);
  });

  it('should not match invalid headers', () => {
    const input = 'Header 1';
    expect(REGEXP_HEADER.test(input)).toBe(false);
  });

  it('should match h3 header', () => {
    const input = '### Header 3';
    expect(REGEXP_H3.test(input)).toBe(true);
  });

  it('should match h2 header', () => {
    const input = '## Header 2';
    expect(REGEXP_H2.test(input)).toBe(true);
  });

  it('should match h1 header', () => {
    const input = '# Header 1';
    expect(REGEXP_HEADER.test(input)).toBe(true);
  });
});