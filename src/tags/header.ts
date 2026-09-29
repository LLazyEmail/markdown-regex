/**
 * Matches ATX Markdown headers (1–6 `#` at start of string or after a newline).
 *
 * Flags: `gm`. Reset `.lastIndex` between `.test()` / `.exec()` calls.
 *
 * Captures: [1] start or newline, [2] the `#` run, [3] heading text.
 *
 * Fails on setext headers (`Title` / `=====`).
 *
 * @example
 *   '# Header 1'.match(REGEXP_HEADER)
 *   // ['# Header 1', '', '#', 'Header 1']
 * @example Does not match setext `Title\n=====`
 */
export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;

/**
 * Matches level-2 ATX headers only (`## …`).
 *
 * Flags: `gim`. Captures: [1] heading text.
 *
 * @example
 *   '## Heading 2'.match(REGEXP_H2)
 *   // ['## Heading 2', 'Heading 2']
 * @example Does not match `# Heading 1`
 */
export const REGEXP_H2 = /^##\s+(.*)$/gim;

/**
 * Matches level-3 ATX headers only (`### …`).
 *
 * Flags: `gim`. Captures: [1] heading text.
 *
 * @example
 *   '### Heading 3'.match(REGEXP_H3)
 *   // ['### Heading 3', 'Heading 3']
 * @example Does not match `## Heading 2`
 */
export const REGEXP_H3 = /^###\s+(.*)$/gim;
