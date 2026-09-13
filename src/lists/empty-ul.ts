/**
 * Matches consecutive empty unordered-list HTML tags.
 * Useful when cleaning generated HTML.
 *
 * @example </ul><ul>
 * @example </ul> <ul>
 */
export const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
