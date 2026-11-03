/**
 * markdown-regex
 *
 * Ready-to-use RegExp constants for parsing Markdown.
 * Workspace packages under `packages/*` are private and bundled into this
 * public package (see `tsup.config.ts` `noExternal`).
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
  extract,
  extractLinks,
  extractImages,
  extractHeaders,
  header,
  link,
  image,
  strong,
  italic,
  fencedCode,
  ulList,
  olList,
  isParsable,
} from '@markdown-regex/core';

export type { ExtractResult, ParsableResult } from '@markdown-regex/core';
