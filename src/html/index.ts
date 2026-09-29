/**
 * Matches raw HTML tags including closing and self-closing forms.
 *
 * @example Matches `<div>`, `</span>`, `<br/>`
 * @example Does not match `<<not-a-tag>>`
 */
export const REGEXP_HTML = /<\/?[a-z][\w-]*(?:\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/gi;
