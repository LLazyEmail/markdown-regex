/**
 * Matches consecutive empty blockquote HTML tags.
 * Useful for cleaning up generated HTML.
 *
 * Example: </blockquote><blockquote>
 */
export const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
