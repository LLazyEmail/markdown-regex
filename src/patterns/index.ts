/**
 * Canonical RegExp patterns for markdown-regex.
 * Prefer importing from here (or the package root) — not from tags/, lists/, code/, or html/.
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
} from './block';

export {
  REGEXP_LINK,
  REGEXP_IMAGE,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_DEL,
  REGEXP_CODE,
  REGEXP_INLINE_CODE,
  REGEXP_Q,
  REGEXP_PARAGRAPH,
  REGEXP_BR,
} from './inline';

export {
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} from './cleanup';
