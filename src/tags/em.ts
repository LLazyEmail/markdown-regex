/**
 * Matches italic/emphasis text using * or _ delimiters.
 * Requires surrounding whitespace or certain characters to reduce false positives.
 *
 * Examples: *italic*, _italic_
 */
export const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;
