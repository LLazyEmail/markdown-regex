/**
 * Matches an ordered list item (number + period after a newline).
 *
 * @example 1. first item
 */
export const REGEXP_OL_LIST = /(?:\r\n|\r|\n)\d+\.(.*)/g;
