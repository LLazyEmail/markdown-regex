/**
 * Matches strikethrough using `~~` delimiters.
 *
 * @example Matches `~~deleted~~`
 * @example Does not match `~deleted~`
 */
export const REGEXP_DEL = /~~(.+?)~~/g;
