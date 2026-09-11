import { NEWLINE } from '../utils';

/**
 * Matches markdown headers (lines starting with one or more # characters).
 * Handles both Unix and Windows newlines. Also matches headers at the start of the string.
 *
 * Examples:
 *   # Heading 1
 *   ## Heading 2
 *   ### Heading 3
 */
export const REGEXP_HEADER = new RegExp(`(?:^|${NEWLINE})(#{1,6})\\s*(.*)`, 'gm');

/** Matches specifically level-2 headers */
export const REGEXP_H2 = /^##\\s+(.*)$/gim;

/** Matches specifically level-3 headers */
export const REGEXP_H3 = /^###\\s+(.*)$/gim;
