/**
 * Matches consecutive ordered list HTML tags with optional whitespace.
 * Used to clean up redundant list HTML.
 * Example: `</ol><ol>` or `</ol> <ol>`
 */
const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;

export { REGEXP_EMPTY_OL };
