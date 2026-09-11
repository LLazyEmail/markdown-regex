/**
 * Matches bold/strong text using ** or __ delimiters.
 * Captures the content between the delimiters.
 *
 * Examples: **bold**, __bold__
 */
export const REGEXP_STRONG = /(\*\*|__)(.*?)\1/g;
