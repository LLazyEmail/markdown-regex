/**
 * Matches inline Markdown link syntax `[text](url)`.
 *
 * Flags: `g`. Reset `.lastIndex` between `.test()` / `.exec()` calls,
 * or use `matchAll`.
 *
 * Captures: [1] text, [2] url.
 *
 * Fails on reference links (`[text][id]`), links inside code unless you
 * use `extractLinks()`, and image syntax (use `REGEXP_IMAGE`).
 *
 * @example
 *   '[a](b)'.match(REGEXP_LINK)
 *   // ['[a](b)', 'a', 'b']
 * @example Does not match `[GitHub][id]`
 */
export const REGEXP_LINK = /\[([^\[]*?)\]\(([^)]+?)\)/g;
