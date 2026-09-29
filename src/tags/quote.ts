/**
 * Matches the custom newsletter quote syntax `:"…"`.
 *
 * @example Matches `:"quoted text":`
 * @example Does not match `"quoted text"`
 */
export const REGEXP_Q = /:"(.*?)":/g;
