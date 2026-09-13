/**
 * Matches consecutive empty ordered-list HTML tags.
 * Useful when cleaning generated HTML.
 *
 * @example </ol><ol>
 * @example </ol> <ol>
 */
export const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
