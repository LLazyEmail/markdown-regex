/**
 * Matches blockquote lines starting with `>` or `&gt;` after a newline.
 *
 * @example
 *   > quoted paragraph
 */
export const REGEXP_BLOCKQUOTE = /(?:\r\n|\r|\n)(?:>|&gt;)(.*)/g;
