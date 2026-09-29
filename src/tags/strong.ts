/**
 * Matches bold/strong using `**` or `__`.
 * Captures inner text in group 1 (`**`) or group 2 (`__`).
 *
 * @example Matches `**bold**` and `__bold__`
 * @example Does not match `*italic*`
 */
export const REGEXP_STRONG = /\*\*(.+?)\*\*|__(.+?)__/g;
