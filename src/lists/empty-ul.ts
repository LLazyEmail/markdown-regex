/**
 * Matches consecutive unordered list HTML tags with optional whitespace.
 * Useful for cleaning up generated HTML.
 *
 * Example: </ul><ul> or </ul> <ul>
 */
export const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
