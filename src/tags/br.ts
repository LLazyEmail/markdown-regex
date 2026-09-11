import { NEWLINE } from '../utils';

/**
 * Matches two or more consecutive newlines (paragraph / line breaks).
 * Platform-agnostic.
 */
export const REGEXP_BR = new RegExp(`((${NEWLINE}){2,})`, 'g');
