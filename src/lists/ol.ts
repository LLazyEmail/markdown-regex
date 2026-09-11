import { NEWLINE } from '../utils';

/**
 * Matches ordered list items (lines starting with a number and period).
 * Platform-agnostic newline handling.
 *
 * Example: 1. item
 */
export const REGEXP_OL_LIST = new RegExp(`${NEWLINE}[0-9]+\\.(.*)`, 'g');
