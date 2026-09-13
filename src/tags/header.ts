/**
 * Matches ATX markdown headers (lines starting with 1–6 `#` characters).
 * Matches at the start of the string or after a newline (Unix / Windows / old Mac).
 *
 * Captures: [1] the newline or start, [2] the `#` run, [3] the heading text.
 *
 * @example
 *   # Heading 1
 *   ## Heading 2
 *   ### Heading 3
 */
export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;

/**
 * Matches level-2 headers only (`## …`).
 *
 * @example ## Heading 2
 */
export const REGEXP_H2 = /^##\s+(.*)$/gim;

/**
 * Matches level-3 headers only (`### …`).
 *
 * @example ### Heading 3
 */
export const REGEXP_H3 = /^###\s+(.*)$/gim;
