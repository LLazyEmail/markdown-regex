/**
 * Matches an ordered list item (`1. …`) at start of string or after a newline.
 *
 * @example Matches `1. first item`
 * @example Does not match `1) first item`
 */
export const REGEXP_OL_LIST = /(?:^|\r\n|\r|\n)\d+\.(.*)/gm;
