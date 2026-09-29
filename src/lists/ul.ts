/**
 * Matches an unordered `*` list item at start of string or after a newline.
 * Optional 4-space indent is allowed. Does not match `-` or `+` markers.
 *
 * @example Matches `* item one`
 * @example Does not match `- item one`
 */
export const REGEXP_UL_LIST = /(?:^|\r\n|\r|\n)(?:\s{4})?\*(.*)/gm;
