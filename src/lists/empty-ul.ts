/**
 * Matches consecutive empty unordered-list HTML tags. Cleanup helper, not Markdown.
 *
 * @example Matches `</ul><ul>` and `</ul> <ul>`
 * @example Does not match `<ul><li>item</li></ul>`
 */
export const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;
