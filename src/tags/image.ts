/**
 * Matches Markdown image syntax `![alt](url)`. Empty alt is valid.
 *
 * Flags: `g`. Reset `.lastIndex` between `.test()` / `.exec()` calls.
 *
 * Captures: [1] alt text, [2] url.
 *
 * Fails on reference images and on links without `!`.
 *
 * @example
 *   '![logo](./logo.png)'.match(REGEXP_IMAGE)
 *   // ['![logo](./logo.png)', 'logo', './logo.png']
 * @example Does not match `[logo](./logo.png)`
 */
export const REGEXP_IMAGE = /!\[([^\[]*?)\]\(([^)]+?)\)/g;
