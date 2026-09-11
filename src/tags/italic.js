/**
 * Matches italic/emphasis text using * or _ delimiters.
 * Legacy JS mirror of italic.ts — prefer the TypeScript source.
 */
export const REGEXP_ITALIC = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;
