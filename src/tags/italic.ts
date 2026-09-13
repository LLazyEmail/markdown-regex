/**
 * Matches italic/emphasis using `*` or `_` delimiters.
 * Requires surrounding whitespace (or start/end / `>` / `<`) so that
 * mid-word underscores are less likely to match.
 *
 * @example  *italic*
 * @example  _italic_
 */
export const REGEXP_ITALIC = /(^|[\s>])(\*|_)(.+?)\2([\s<]|$)/g;
