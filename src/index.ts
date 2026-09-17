/**
 * markdown-regex
 *
 * Ready-to-use RegExp constants for parsing Markdown.
 * Zero runtime dependencies. Works in Node, browsers, and bundlers.
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
// src/index.ts

/** Matches fenced code blocks: ```lang\ncode\n``` or ~~~lang\ncode\n~~~ */
export const REGEXP_FENCED_CODE = /(?:^|\n)(`{3,}|~{3,})([\w-]*)\r?\n([\s\S]*?)\r?\n\1(?=\n|$)/g;
/** Matches inline code spans: `code` */
export const REGEXP_INLINE_CODE = /(?<!\\)(`+)([^`\n]+?)\1(?!`)/g;
/** Matches raw HTML tags: <div>, </span>, <br/> */
export const REGEXP_HTML = /<\/?[a-z][\w-]*(?:\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/gi;

export {
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} from './lists/index';
