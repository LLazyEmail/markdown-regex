/**
 * Matches quoted text using the non-standard :"...": syntax
 * used by some email/newsletter pipelines.
 *
 * Example: :"quoted text":
 */
export const REGEXP_Q = /:"(.*?)":/g;
