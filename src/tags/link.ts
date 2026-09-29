/**
 * Matches inline Markdown link syntax `[text](url)`.
 * Captures: [1] link text, [2] url. Does not match reference links.
 *
 * @example Matches `[GitHub](https://github.com)`
 * @example Does not match `[GitHub][id]`
 */
export const REGEXP_LINK = /\[([^\[]*?)\]\(([^)]+?)\)/g;
