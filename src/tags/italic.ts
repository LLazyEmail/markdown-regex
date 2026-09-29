/**
 * Matches italic/emphasis using `*` or `_` with surrounding whitespace
 * (or start/end / `>` / `<`).
 *
 * Flags: `g`. Reset `.lastIndex` between `.test()` / `.exec()` calls.
 *
 * Captures: [1] leading context, [2] delimiter, [3] inner text, [4] trailing context.
 *
 * Fails on mid-word `foo_bar_baz`, nested `***bold italic***`, and
 * `not*italic*` with no surrounding whitespace.
 *
 * @example
 *   ' *italic* '.match(REGEXP_ITALIC)
 *   // [' *italic* ', ' ', '*', 'italic', ' ']
 * @example Does not match `not*italic*`
 */
export const REGEXP_ITALIC = /(^|[\s>])(\*|_)(.+?)\2([\s<]|$)/g;
