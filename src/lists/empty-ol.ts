/**
 * Matches consecutive ordered list HTML tags with optional whitespace.
 * Useful for cleaning up generated HTML.
 *
 * Example: </ol><ol> or </ol> <ol>
 */
export const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
