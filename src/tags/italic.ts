/**
 * Matches italic/emphasis using `*` or `_` with surrounding whitespace
 * (or start/end / `>` / `<`) so mid-word underscores are less likely to match.
 *
 * @example Matches ` *italic* ` and ` _italic_ `
 * @example Does not match `not*italic*`
 */
export const REGEXP_ITALIC = /(^|[\s>])(\*|_)(.+?)\2([\s<]|$)/g;
