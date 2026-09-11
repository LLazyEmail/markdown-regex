import { NEWLINE } from '../utils';

/**
 * Matches blockquote lines starting with > or &gt;.
 * Platform-agnostic newline handling.
 *
 * Example: > blockquote text
 */
export const REGEXP_BLOCKQUOTE = new RegExp(`${NEWLINE}(&gt;|>)(.*)`, 'g');
