/**
 * HTML cleanup helpers (not Markdown). Used by `markdown-regex/cleanup`.
 *
 * @packageDocumentation
 */

/** Matches consecutive empty blockquote HTML tags. */
export const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;

/** Matches consecutive empty unordered-list HTML tags. */
export const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;

/** Matches consecutive empty ordered-list HTML tags. */
export const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
