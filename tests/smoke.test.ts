import { beforeAll, describe, expect, it } from 'vitest';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

describe('markdown-regex smoke tests', () => {
  let regexes: Record<string, unknown>;

  beforeAll(async () => {
    // Load the built CommonJS artifact at runtime via a file:// URL.
    // Using pathToFileURL avoids the "Cannot find module '/dist/index.cjs'" error
    // that a bare static import produces in ESM mode.
    const distPath = join(process.cwd(), 'dist', 'index.cjs');
    regexes = (await import(pathToFileURL(distPath).href)) as Record<string, unknown>;
  });

  it('exports the expected regex constants', () => {
    const expected: string[] = [
      'REGEXP_HEADER',
      'REGEXP_IMAGE',
      'REGEXP_LINK',
      'REGEXP_STRONG',
      'REGEXP_ITALIC',
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
      expect(regexes[name], `${name} should be a RegExp`).toBeInstanceOf(RegExp);
    });
  });

  it('REGEXP_LINK matches a simple markdown link', () => {
    const md = 'Visit [GitHub](https://github.com) today.';
    const matches = md.match(regexes.REGEXP_LINK as RegExp);
    expect(matches).not.toBeNull();
    expect(matches![0]).toBe('[GitHub](https://github.com)');
  });

  it('REGEXP_STRONG matches bold text', () => {
    const md = 'This is **bold** text.';
    const matches = md.match(regexes.REGEXP_STRONG as RegExp);
    expect(matches).not.toBeNull();
    expect(matches![0]).toContain('bold');
  });

  it('REGEXP_ITALIC matches italic text', () => {
    // Note: the current pattern requires surrounding whitespace/context
    const md2 = ' This is *italic* text ';
    const matches = md2.match(regexes.REGEXP_ITALIC as RegExp);
    expect(matches, 'should match italic with surrounding spaces').not.toBeNull();
  });

  it('REGEXP_HEADER matches headers with different newlines', () => {
    const unix = '\n# Title\n## Subtitle';
    const windows = '\r\n# Title\r\n## Subtitle';

    expect((regexes.REGEXP_HEADER as RegExp).test(unix)).toBe(true);
    expect((regexes.REGEXP_HEADER as RegExp).test(windows)).toBe(true);
  });
});