/**
 * Matches italic/emphasis text using `*` or `_` delimiters.
 * Requires surrounding whitespace or angle brackets for context.
 * Captures the content between delimiters.
 * Example: `*italic*`, `_italic_`
 */
const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;

export { REGEXP_EM };
