import { REGEXP_HEADER, REGEXP_IMAGE, REGEXP_LINK } from './tags/index';
import { REGEXP_FENCED_CODE, REGEXP_INLINE_CODE } from './code';

function withoutCode(markdown: string): string {
  return markdown
    .replace(REGEXP_FENCED_CODE, '\n')
    .replace(REGEXP_INLINE_CODE, ' ');
}

/**
 * Pulls inline links out of Markdown as `{ text, url }` objects.
 * Strips fenced and inline code first so `[a](b)` inside a fence is ignored.
 *
 * @example
 *   extractLinks('[a](b)')
 *   // [{ text: 'a', url: 'b' }]
 */
export function extractLinks(markdown: string): { text: string; url: string }[] {
  const links: { text: string; url: string }[] = [];
  for (const m of withoutCode(markdown).matchAll(REGEXP_LINK)) {
    links.push({ text: m[1], url: m[2] });
  }
  return links;
}

/**
 * Pulls images out of Markdown as `{ alt, url }` objects.
 *
 * @example
 *   extractImages('![logo](./logo.png)')
 *   // [{ alt: 'logo', url: './logo.png' }]
 */
export function extractImages(markdown: string): { alt: string; url: string }[] {
  const images: { alt: string; url: string }[] = [];
  for (const m of withoutCode(markdown).matchAll(REGEXP_IMAGE)) {
    images.push({ alt: m[1], url: m[2] });
  }
  return images;
}

/**
 * Pulls ATX headers as `{ level, text }`.
 * REGEXP_HEADER groups: [1] prefix, [2] `#` run, [3] text.
 *
 * @example
 *   extractHeaders('# Title')
 *   // [{ level: 1, text: 'Title' }]
 */
export function extractHeaders(markdown: string): { level: number; text: string }[] {
  const headers: { level: number; text: string }[] = [];
  for (const m of withoutCode(markdown).matchAll(REGEXP_HEADER)) {
    headers.push({ level: m[2].length, text: m[3].trim() });
  }
  return headers;
}
