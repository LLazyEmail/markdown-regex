import { NEWLINE } from '../utils';

/**
 * Matches paragraph content between newlines.
 * Platform-agnostic newline handling.
 */
export const REGEXP_PARAGRAPH = new RegExp(`${NEWLINE}(.+?)${NEWLINE}`, 'g');
