/**
 * Matches a horizontal rule: 5 or more dashes after a newline.
 *
 * @example Matches `\n-----`
 * @example Does not match `---`
 */
export const REGEXP_HR = /(?:\r\n|\r|\n)-{5,}/g;
