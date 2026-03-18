'use strict';

const { REGEXP_IMAGE } = require('../../src/index');

describe('REGEXP_IMAGE', () => {
  test('should match image with alt text and url', () => {
    expect(REGEXP_IMAGE.test('![alt text](https://example.com/image.png)')).toBe(true);
  });

  test('should match image with single-char alt text', () => {
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_IMAGE.test('![x](image.png)')).toBe(true);
  });

  test('should match image with relative path', () => {
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_IMAGE.test('![logo](./assets/logo.png)')).toBe(true);
  });

  test('should not match link without exclamation mark', () => {
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_IMAGE.test('[link](https://example.com)')).toBe(false);
  });

  test('should not match plain text', () => {
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_IMAGE.test('plain text')).toBe(false);
  });
});
