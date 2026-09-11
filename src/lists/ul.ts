import { NEWLINE } from '../utils';

/**
 * Matches unordered list items (lines starting with *).
 * Supports optional leading indentation (4 spaces).
 * Platform-agnostic newline handling.
 *
 * Example:
 * * item one
 * * item two
 */
export const REGEXP_UL_LIST = new RegExp(
  `${NEWLINE}(((?:\\s{4})?\\*(.*?)${NEWLINE}){1,})`,
  'g'
);
