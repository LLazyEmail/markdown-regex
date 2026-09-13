/**
 * Matches markdown image syntax.
 * Captures: [1] alt text, [2] url.
 *
 * @example ![alt text](https://example.com/image.png)
 */
export const REGEXP_IMAGE = /!\[([^\[]*?)\]\(([^)]+?)\)/g;
