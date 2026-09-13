/**
 * Matches an unordered list item (`*` after a newline).
 * Optional 4-space indent is allowed.
 *
 * @example
 *   * item one
 *   * item two
 */
export const REGEXP_UL_LIST = /(?:\r\n|\r|\n)(?:\s{4})?\*(.*)/g;
