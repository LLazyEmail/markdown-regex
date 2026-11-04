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
 * For one-off `.test()` / `.exec()` use the factory helpers
 * (`header()`, `link()`, …) so you never share `lastIndex`.
 *
 * HTML cleanup constants live on `markdown-regex/cleanup`.
 *
 * Pattern literals live in `src/patterns/` (single source of truth).
 * `src/tags/`, `src/lists/`, `src/code/`, and `src/html/` are thin re-exports.
 *
 * @packageDocumentation
 */

export {
  REGEXP_HEADER,
  REGEXP_H2,
  REGEXP_H3,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_FENCED_CODE,
  REGEXP_HTML,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_DEL,
  REGEXP_CODE,
  REGEXP_INLINE_CODE,
  REGEXP_Q,
  REGEXP_PARAGRAPH,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} from './patterns';

export { extract } from './extract';
export type { ExtractResult } from './extract';
export { extractLinks, extractImages, extractHeaders } from './extractors';

export {
  header,
  link,
  image,
  strong,
  italic,
  fencedCode,
  ulList,
  olList,
} from './factories';
