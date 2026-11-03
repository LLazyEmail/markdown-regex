/**
 * Flexible newline fragment: Unix (`\n`), Windows (`\r\n`), old Mac (`\r`).
 * Prefer embedding `(?:\r\n|\r|\n)` directly in regex literals.
 * This constant is kept for callers that compose patterns at runtime.
 */
export const NEWLINE = '(?:\r\n|\r|\n)';
