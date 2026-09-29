/**
 * Matches two or more consecutive newlines (`\n`, `\r\n`, or `\r`).
 *
 * @example Matches `a\n\nb`
 * @example Does not match a single `\n`
 */
export const REGEXP_BR = /(?:\r\n|\r|\n){2,}/g;
