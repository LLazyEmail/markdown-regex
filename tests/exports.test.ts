import * as api from '../src/index';

const EXPECTED = [
  'REGEXP_HEADER',
  'REGEXP_H2',
  'REGEXP_H3',
  'REGEXP_IMAGE',
  'REGEXP_LINK',
  'REGEXP_STRONG',
  'REGEXP_ITALIC',
  'REGEXP_DEL',
  'REGEXP_CODE',
  'REGEXP_INLINE_CODE',   // ← added
  'REGEXP_FENCED_CODE',   // ← added
  'REGEXP_HTML',          // ← added
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
] as const;

describe('exports', () => {
  it('exports every expected regex constant as RegExp', () => {
    for (const name of EXPECTED) {
      const value = (api as Record<string, unknown>)[name];
      expect(value).toBeInstanceOf(RegExp);
    }
  });

  it('export surface matches the expected set', () => {
    const keys = Object.keys(api).filter((k) => k.startsWith('REGEXP_')).sort();
    expect(keys).toEqual([...EXPECTED].sort());
  });
});
