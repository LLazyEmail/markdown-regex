/**
 * Inline Markdown patterns (single source of truth).
 *
 * All patterns are global. Reset `.lastIndex` or prefer `matchAll` / extract helpers.
 *
 * @packageDocumentation
 */

/**
 * Matches inline Markdown link syntax `[text](url)`.
 *
 * Captures: [1] text, [2] url.
 */
export const REGEXP_LINK = /\[([^\[]*?)\]\(([^)]+?)\)/g;

/**
 * Matches Markdown image syntax `![alt](url)`. Empty alt is valid.
 *
 * Captures: [1] alt text, [2] url.
 */
export const REGEXP_IMAGE = /!\[([^\[]*?)\]\(([^)]+?)\)/g;

/**
 * Matches bold/strong using `**` or `__`.
 *
 * Captures: [1] text inside `**`, [2] text inside `__` (the other is undefined).
 */
export const REGEXP_STRONG = /\*\*(.+?)\*\*|__(.+?)__/g;

/**
 * Matches italic/emphasis using `*` or `_` with surrounding whitespace
 * (or start/end / `>` / `<`).
 *
 * Captures: [1] leading context, [2] delimiter, [3] inner text, [4] trailing context.
 */
export const REGEXP_ITALIC = /(^|[\s>])(\*|_)(.+?)\2([\s<]|$)/g;

/**
 * Matches strikethrough using `~~` delimiters.
 *
 * Captures: [1] inner text.
 */
export const REGEXP_DEL = /~~(.+?)~~/g;

/**
 * Matches inline code using single backticks. Legacy alias style.
 *
 * Captures: [1] code text.
 */
export const REGEXP_CODE = /`(.+?)`/g;

/**
 * Matches inline code spans with balanced backticks. Prefer this over REGEXP_CODE.
 *
 * Captures: [1] fence run, [2] code text.
 */
export const REGEXP_INLINE_CODE = /(?<!\\)(`+)([^`\n]+?)\1(?!`)/g;

/**
 * Matches the custom newsletter quote syntax `:"…"`.
 *
 * Captures: [1] quoted text.
 */
export const REGEXP_Q = /:"(.*?)":/g;

/**
 * Heuristic: paragraph-like content sitting between two newlines.
 *
 * Captures: [1] paragraph text.
 */
export const REGEXP_PARAGRAPH = /(?:\r\n|\r|\n)(.+?)(?:\r\n|\r|\n)/g;

/**
 * Matches two or more consecutive newlines (`\n`, `\r\n`, or `\r`).
 */
export const REGEXP_BR = /(?:\r\n|\r|\n){2,}/g;
