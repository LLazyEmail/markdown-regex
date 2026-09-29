/**
 * markdown-regex
 *
 * Ready-to-use RegExp constants for parsing Markdown.
 * Every public regex is global (`g`). Reset `.lastIndex` between `.test()`
 * / `.exec()` calls, or use `String.prototype.matchAll`.
 *
 * Prefer {@link extract}, {@link extractLinks}, {@link extractImages},
 * or {@link extractHeaders} over composing regexes yourself.
 *
 * HTML cleanup constants live on `markdown-regex/cleanup`.
 *
 * @packageDocumentation
 */

export {
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
} from './tags/index';

export { REGEXP_FENCED_CODE } from './code';
export { REGEXP_INLINE_CODE } from './code';
export { REGEXP_HTML } from './html';
export { extract } from './extract';
export type { ExtractResult } from './extract';
export { extractLinks, extractImages, extractHeaders } from './extractors';

export {
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} from './lists/index';
