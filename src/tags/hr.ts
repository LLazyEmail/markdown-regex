import { NEWLINE } from '../utils';

/**
 * Matches horizontal rule lines (5 or more dashes).
 * Platform-agnostic newline handling.
 *
 * Example: -----
 */
export const REGEXP_HR = new RegExp(`${NEWLINE}-{5,}`, 'g');
