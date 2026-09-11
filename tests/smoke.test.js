/**
 * Basic smoke test that works after the TypeScript + tsup migration.
 * It imports from the built package (dist/) so the build step must succeed first.
 */
const assert = require('assert');

describe('markdown-regex smoke tests', () => {
  let regexes;

  beforeAll(() => {
    // Require the CommonJS build
    regexes = require('../dist/index.cjs');
  });

  it('exports the expected regex constants', () => {
    const expected = [
      'REGEXP_HEADER',
      'REGEXP_IMAGE',
      'REGEXP_LINK',
      'REGEXP_STRONG',
      'REGEXP_EM',
      'REGEXP_DEL',
      'REGEXP_CODE',
      'REGEXP_Q',
      'REGEXP_BLOCKQUOTE',
      'REGEXP_HR',
      'REGEXP_PARAGRAPH',
      'REGEXP_BR',
      'REGEXP_EMPTY_BLOCKQUOTE',
      'REGEXP_UL_LIST',
      'REGEXP_OL_LIST',
      'REGEXP_EMPTY_UL',
      'REGEXP_EMPTY_OL',
    ];

    expected.forEach((name) => {
      assert.ok(regexes[name] instanceof RegExp, `${name} should be a RegExp`);
    });
  });

  it('REGEXP_LINK matches a simple markdown link', () => {
    const md = 'Visit [GitHub](https://github.com) today.';
    const matches = md.match(regexes.REGEXP_LINK);
    assert.ok(matches);
    assert.strictEqual(matches[0], '[GitHub](https://github.com)');
  });

  it('REGEXP_STRONG matches bold text', () => {
    const md = 'This is **bold** text.';
    const matches = md.match(regexes.REGEXP_STRONG);
    assert.ok(matches);
    assert.ok(matches[0].includes('bold'));
  });

  it('REGEXP_HEADER matches headers with different newlines', () => {
    const unix = '\n# Title\n## Subtitle';
    const windows = '\r\n# Title\r\n## Subtitle';

    assert.ok(regexes.REGEXP_HEADER.test(unix));
    assert.ok(regexes.REGEXP_HEADER.test(windows));
  });
});
