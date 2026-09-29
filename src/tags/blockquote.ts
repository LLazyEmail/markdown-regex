/**
 * Matches a blockquote line starting with `>` or `&gt;` after a newline.
 *
 * @example Matches `\n> quoted paragraph`
 * @example Does not match `> quote` at the very start of the string
 */
export const REGEXP_BLOCKQUOTE = /(?:\r\n|\r|\n)(?:>|&gt;)(.*)/g;
