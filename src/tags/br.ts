/**
 * Matches two or more consecutive newlines (paragraph / line breaks).
 * Understands `\n`, `\r\n` and `\r`.
 *
 * @example a\\n\\nb
 */
export const REGEXP_BR = /(?:\r\n|\r|\n){2,}/g;
