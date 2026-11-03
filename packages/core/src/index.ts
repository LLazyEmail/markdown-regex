/**
 * @markdown-regex/core — public surface re-exported by markdown-regex.
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

export { isParsable } from './validate';
export type { ParsableResult } from './validate';
