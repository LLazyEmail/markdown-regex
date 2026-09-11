/**
 * Matches consecutive empty blockquote HTML tags.
 * Used to clean up redundant blockquote HTML.
 * Example: `</blockquote><blockquote>`
 */
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;

export { REGEXP_EMPTY_BLOCKQUOTE };
