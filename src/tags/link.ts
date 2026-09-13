/**
 * Matches markdown link syntax.
 * Captures: [1] link text, [2] url
 *
 * Example: [link text](https://example.com)
 */
export const REGEXP_LINK = new RegExp('\\[([^\\]]*?)\\]\\(([^)]+?)\\)', 'g');
