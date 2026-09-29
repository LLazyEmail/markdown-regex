import { describe, expect, it } from 'vitest';
import { extractHeaders, extractImages, extractLinks } from '../src/extractors';

describe('extractLinks', () => {
  it('returns typed { text, url } objects', () => {
    expect(extractLinks('[a](b)')).toEqual([{ text: 'a', url: 'b' }]);
  });

  it('ignores links inside fenced code', () => {
    const md = '```\n[a](b)\n```\n[real](https://example.com)';
    expect(extractLinks(md)).toEqual([{ text: 'real', url: 'https://example.com' }]);
  });
});

describe('extractImages', () => {
  it('returns typed { alt, url } objects', () => {
    expect(extractImages('![logo](./logo.png)')).toEqual([
      { alt: 'logo', url: './logo.png' },
    ]);
  });
});

describe('extractHeaders', () => {
  it('uses the # run as the level', () => {
    expect(extractHeaders('# Title\n## Sub')).toEqual([
      { level: 1, text: 'Title' },
      { level: 2, text: 'Sub' },
    ]);
  });
});
