/**
 * Matches consecutive empty ordered-list HTML tags. Cleanup helper, not Markdown.
 *
 * @example Matches `</ol><ol>` and `</ol> <ol>`
 * @example Does not match `<ol><li>item</li></ol>`
 */
export const REGEXP_EMPTY_OL = /<\/ol>\s?<ol>/g;
