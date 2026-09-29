/**
 * Heuristic: paragraph-like content sitting between two newlines.
 *
 * @example Matches `\nhello world\n`
 * @example Does not match a single-line string with no surrounding newlines
 */
export const REGEXP_PARAGRAPH = /(?:\r\n|\r|\n)(.+?)(?:\r\n|\r|\n)/g;
