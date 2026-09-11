/**
 * Matches markdown link syntax with text and URL.
 * Captures both the link text and the URL.
 * Example: `[link text](https://example.com)`
 */
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;

export { REGEXP_LINK };
