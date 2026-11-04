import { describe, expect, it } from 'vitest';
import * as patterns from '../src/patterns';
import { REGEXP_HEADER as TAG_HEADER, REGEXP_HR as TAG_HR, REGEXP_ITALIC as TAG_ITALIC } from '../src/tags';
import { REGEXP_UL_LIST as LIST_UL } from '../src/lists';
import { REGEXP_FENCED_CODE as CODE_FENCED, REGEXP_INLINE_CODE as CODE_INLINE } from '../src/code';
import { REGEXP_HTML as HTML_RE } from '../src/html';

describe('patterns/ is the single source of truth', () => {
  it('tags/ re-exports the same RegExp instances', () => {
    expect(TAG_HEADER).toBe(patterns.REGEXP_HEADER);
    expect(TAG_HR).toBe(patterns.REGEXP_HR);
    expect(TAG_ITALIC).toBe(patterns.REGEXP_ITALIC);
  });

  it('lists/, code/, html/ re-export the same RegExp instances', () => {
    expect(LIST_UL).toBe(patterns.REGEXP_UL_LIST);
    expect(CODE_FENCED).toBe(patterns.REGEXP_FENCED_CODE);
    expect(CODE_INLINE).toBe(patterns.REGEXP_INLINE_CODE);
    expect(HTML_RE).toBe(patterns.REGEXP_HTML);
  });
});
