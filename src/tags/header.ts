/**
 * Matches ATX Markdown headers (1–6 `#` at start of string or after a newline).
 * Captures: [1] start/newline, [2] the `#` run, [3] heading text.
 *
 * @example Matches `# Header 1`
 * @example Does not match setext `Title\n=====`
 */
export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;

/**
 * Matches level-2 ATX headers only (`## …`).
 *
 * @example Matches `## Heading 2`
 * @example Does not match `# Heading 1`
 */
export const REGEXP_H2 = /^##\s+(.*)$/gim;

/**
 * Matches level-3 ATX headers only (`### …`).
 *
 * @example Matches `### Heading 3`
 * @example Does not match `## Heading 2`
 */
export const REGEXP_H3 = /^###\s+(.*)$/gim;
