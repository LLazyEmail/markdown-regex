/**
 * Block-level Markdown patterns (single source of truth).
 *
 * All patterns are global. Reset `.lastIndex` or prefer `matchAll` / extract helpers.
 *
 * @packageDocumentation
 */

/**
 * Matches ATX Markdown headers (1–6 `#` at start of string or after a newline).
 *
 * Flags: `gm`. Captures: [1] start or newline, [2] the `#` run, [3] heading text.
 */
export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;

/** Matches level-2 ATX headers only (`## …`). Flags: `gim`. Captures: [1] heading text. */
export const REGEXP_H2 = /^##\s+(.*)$/gim;

/** Matches level-3 ATX headers only (`### …`). Flags: `gim`. Captures: [1] heading text. */
export const REGEXP_H3 = /^###\s+(.*)$/gim;

/**
 * Matches a blockquote line starting with `>` or `&gt;` after a newline.
 *
 * Captures: [1] quoted text (may include a leading space).
 */
export const REGEXP_BLOCKQUOTE = /(?:\r\n|\r|\n)(?:>|&gt;)(.*)/g;

/**
 * Matches a horizontal rule: a whole line of 5+ `-`, `*`, or `_`.
 *
 * Flags: `gm`. Captures: [1] the rule characters.
 */
export const REGEXP_HR = /^(-{5,}|\*{5,}|_{5,})\s*$/gm;

/**
 * Matches an unordered `*` list item at start of string or after a newline.
 * Optional 4-space indent is allowed. Does not match `-` or `+` markers.
 *
 * Captures: [1] item text.
 */
export const REGEXP_UL_LIST = /(?:^|\r\n|\r|\n)(?:\s{4})?\*(.*)/gm;

/**
 * Matches an ordered list item (`1. …`) at start of string or after a newline.
 *
 * Captures: [1] item text.
 */
export const REGEXP_OL_LIST = /(?:^|\r\n|\r|\n)\d+\.(.*)/gm;

/**
 * Matches fenced code blocks using ``` or ~~~ fences.
 * Captures: [1] fence chars, [2] language, [3] body.
 */
export const REGEXP_FENCED_CODE =
  /(?:^|\n)(`{3,}|~{3,})([\w-]*)\r?\n([\s\S]*?)\r?\n\1(?=\n|$)/g;

/**
 * Matches raw HTML tags including closing and self-closing forms.
 */
export const REGEXP_HTML =
  /<\/?[a-z][\w-]*(?:\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/gi;
