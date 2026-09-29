/**
 * Matches Markdown image syntax `![alt](url)`. Empty alt is valid.
 * Captures: [1] alt text, [2] url.
 *
 * @example Matches `![logo](./logo.png)`
 * @example Does not match `[logo](./logo.png)` (that is a link)
 */
export const REGEXP_IMAGE = /!\[([^\[]*?)\]\(([^)]+?)\)/g;
