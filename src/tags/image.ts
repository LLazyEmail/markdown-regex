/**
 * Matches markdown image syntax.
 * Captures: [1] alt text, [2] url
 */
export const REGEXP_IMAGE = new RegExp(
  '!\\[([^\\[]*?)\\]\\(([^)]+?)\\)',
  'g'
);
