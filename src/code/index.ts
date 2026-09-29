/**
 * Matches fenced code blocks using ``` or ~~~ fences.
 * Captures: [1] fence chars, [2] language, [3] body.
 *
 * @example Matches a fenced ```js block
 * @example Does not match indented-only code with no fence
 */
export const REGEXP_FENCED_CODE = /(?:^|\n)(`{3,}|~{3,})([\w-]*)\r?\n([\s\S]*?)\r?\n\1(?=\n|$)/g;

/**
 * Matches inline code spans with balanced backticks. Prefer this over REGEXP_CODE.
 *
 * @example Matches `` `code` ``
 * @example Does not match escaped backticks
 */
export const REGEXP_INLINE_CODE = /(?<!\\)(`+)([^`\n]+?)\1(?!`)/g;
