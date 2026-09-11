import {
  REGEXP_HEADER,
  REGEXP_H2,
  REGEXP_H3,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_DEL,
  REGEXP_CODE,
  REGEXP_Q,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} from '../src/index';

const ALL = {
  REGEXP_HEADER,
  REGEXP_H2,
  REGEXP_H3,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_DEL,
  REGEXP_CODE,
  REGEXP_Q,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} as const;

describe('exports', () => {
  it('exports every expected regex constant', () => {
    for (const [name, value] of Object.entries(ALL)) {
      expect(value).toBeInstanceOf(RegExp);
      expect(name.startsWith('REGEXP_')).toBe(true);
    }
  });

  it('does not export the old REGEXP_EM name', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require('../src/index') as Record<string, unknown>;
    expect(mod.REGEXP_EM).toBeUndefined();
  });
});
