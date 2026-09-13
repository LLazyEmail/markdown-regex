/**
 * Matches markdown link syntax.
 * Captures: [1] link text, [2] url
 */
export const REGEXP_LINK = new RegExp(
  '\\[([^\\[]*?)\\]\\(([^)]+?)\\)',
  'g'
);
