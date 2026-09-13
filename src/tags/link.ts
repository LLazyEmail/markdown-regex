/**
 * Matches markdown link syntax.
 * Captures: [1] link text, [2] url.
 *
 * @example [GitHub](https://github.com)
 */
export const REGEXP_LINK = /\[([^\[]*?)\]\(([^)]+?)\)/g;
