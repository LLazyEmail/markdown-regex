/**
 * Thin factory wrappers around the most-used patterns.
 *
 * Each call returns a **new** RegExp instance so callers never have to
 * reset `.lastIndex`. Prefer these when you use `.test()` / `.exec()`
 * in a loop or across calls.
 *
 * For one-shot extraction still prefer `extract` / `extractLinks` / etc.
 *
 * @packageDocumentation
 */

import {
  REGEXP_HEADER,
  REGEXP_LINK,
  REGEXP_IMAGE,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_FENCED_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
} from './patterns';

function fresh(re: RegExp): RegExp {
  return new RegExp(re.source, re.flags);
}

export const header = (): RegExp => fresh(REGEXP_HEADER);
export const link = (): RegExp => fresh(REGEXP_LINK);
export const image = (): RegExp => fresh(REGEXP_IMAGE);
export const strong = (): RegExp => fresh(REGEXP_STRONG);
export const italic = (): RegExp => fresh(REGEXP_ITALIC);
export const fencedCode = (): RegExp => fresh(REGEXP_FENCED_CODE);
export const ulList = (): RegExp => fresh(REGEXP_UL_LIST);
export const olList = (): RegExp => fresh(REGEXP_OL_LIST);
