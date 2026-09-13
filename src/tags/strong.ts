/**
 * Matches bold/strong text using `**` or `__` delimiters.
 * Captures the inner text in group 1 (`**`) or group 2 (`__`).
 *
 * @example **bold**
 * @example __bold__
 */
export const REGEXP_STRONG = /\*\*(.+?)\*\*|__(.+?)__/g;
