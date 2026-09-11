/**
 * Matches bold/strong text using `**` or `__` delimiters.
 * Captures the content between delimiters.
 * Example: `**bold**`, `__bold__`
 */
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;

export { REGEXP_STRONG };
