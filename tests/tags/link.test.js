'use strict';

const { REGEXP_LINK } = require('../../src/index');

describe('REGEXP_LINK', () => {
  test('should match standard markdown link', () => {
    expect(REGEXP_LINK.test('[Link text](https://example.com)')).toBe(true);
  });

  test('should match link with path', () => {
    REGEXP_LINK.lastIndex = 0;
    expect(REGEXP_LINK.test('[Click here](https://example.com/path/to/page)')).toBe(true);
  });

  test('should match link in sentence', () => {
    REGEXP_LINK.lastIndex = 0;
    expect(REGEXP_LINK.test('Check out [this resource](https://example.com) for details.')).toBe(true);
  });

  test('should also match the link portion of image syntax', () => {
    REGEXP_LINK.lastIndex = 0;
    expect(REGEXP_LINK.test('![alt text](https://example.com/image.png)')).toBe(true);
  });

  test('should not match plain text', () => {
    REGEXP_LINK.lastIndex = 0;
    expect(REGEXP_LINK.test('plain text')).toBe(false);
  });
});
