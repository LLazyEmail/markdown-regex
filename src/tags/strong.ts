/**
 * Matches bold/strong using `**` or `__`.
 *
 * Flags: `g`. Reset `.lastIndex` between `.test()` / `.exec()` calls.
 *
 * Captures: [1] text inside `**`, [2] text inside `__` (the other is undefined).
 *
 * Fails on nested `***bold italic***` and on single-star italic.
 *
 * @example
 *   '**bold**'.match(REGEXP_STRONG)
 *   // ['**bold**', 'bold', undefined]
 * @example Does not match `*italic*`
 */
export const REGEXP_STRONG = /\*\*(.+?)\*\*|__(.+?)__/g;
