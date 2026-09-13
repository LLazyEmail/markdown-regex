/**
 * Matches consecutive empty blockquote HTML tags.
 * Useful when cleaning generated HTML.
 *
 * @example </blockquote><blockquote>
 */
export const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
