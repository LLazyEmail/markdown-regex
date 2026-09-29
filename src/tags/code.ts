/**
 * Matches inline code using single backticks. Legacy alias of REGEXP_INLINE_CODE style matching.
 *
 * @example Matches `` `code` ``
 * @example Does not match a fenced ``` block
 */
export const REGEXP_CODE = /`(.+?)`/g;
