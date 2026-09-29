/**
 * Matches consecutive empty blockquote HTML tags. Cleanup helper, not Markdown.
 *
 * @example Matches `</blockquote><blockquote>`
 * @example Does not match `<blockquote>quote</blockquote>`
 */
export const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
