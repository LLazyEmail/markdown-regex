/**
 * Matches paragraph-like content sitting between two newlines.
 *
 * @example \\nhello world\\n
 */
export const REGEXP_PARAGRAPH = /(?:\r\n|\r|\n)(.+?)(?:\r\n|\r|\n)/g;
