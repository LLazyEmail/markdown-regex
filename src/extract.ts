// src/extract.ts
import {
  REGEXP_HEADER,
  REGEXP_LINK,
  REGEXP_IMAGE,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_DEL,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_FENCED_CODE,
  REGEXP_INLINE_CODE,
  REGEXP_HTML,
} from './index';

/**
 * Structured extraction result from {@link extract}.
 */
export interface ExtractResult {
  headers: { level: number; text: string }[];
  links: { text: string; url: string }[];
  images: { alt: string; url: string }[];
  bold: string[];
  italic: string[];
  strikethrough: string[];
  blockquotes: string[];
  horizontalRules: string[];
  unorderedLists: string[];
  orderedLists: string[];
  codeBlocks: { language: string; code: string }[];
  inlineCode: string[];
  html: string[];
}

/**
 * Extracts structured data from a Markdown string.
 * Fenced code is pulled out first, then inline code, so links and emphasis
 * inside code fences are not reported.
 *
 * REGEXP_HEADER groups used here: [2] `#` run, [3] text.
 *
 * @example extract('# Title\n\n[GitHub](https://github.com)')
 * @example Does not treat `[link](url)` inside a fenced block as a link
 */
export function extract(markdown: string): ExtractResult {
  const result: ExtractResult = {
    headers: [],
    links: [],
    images: [],
    bold: [],
    italic: [],
    strikethrough: [],
    blockquotes: [],
    horizontalRules: [],
    unorderedLists: [],
    orderedLists: [],
    codeBlocks: [],
    inlineCode: [],
    html: [],
  };

  let working = markdown;

  const fencedMatches = [...working.matchAll(REGEXP_FENCED_CODE)];
  for (const m of fencedMatches) {
    result.codeBlocks.push({
      language: m[2] || '',
      code: m[3],
    });
  }
  working = working.replace(REGEXP_FENCED_CODE, '\n__CODE_BLOCK__\n');

  const inlineMatches = [...working.matchAll(REGEXP_INLINE_CODE)];
  for (const m of inlineMatches) {
    result.inlineCode.push(m[2]);
  }
  working = working.replace(REGEXP_INLINE_CODE, '__INLINE_CODE__');

  for (const m of working.matchAll(REGEXP_HEADER)) {
    result.headers.push({
      level: m[2].length,
      text: m[3].trim(),
    });
  }

  for (const m of working.matchAll(REGEXP_LINK)) {
    result.links.push({ text: m[1], url: m[2] });
  }

  for (const m of working.matchAll(REGEXP_IMAGE)) {
    result.images.push({ alt: m[1], url: m[2] });
  }

  for (const m of working.matchAll(REGEXP_STRONG)) {
    result.bold.push(m[1] ?? m[2]);
  }

  for (const m of working.matchAll(REGEXP_ITALIC)) {
    result.italic.push(m[3]);
  }

  for (const m of working.matchAll(REGEXP_DEL)) {
    result.strikethrough.push(m[1]);
  }

  for (const m of working.matchAll(REGEXP_BLOCKQUOTE)) {
    result.blockquotes.push(m[1]);
  }

  for (const m of working.matchAll(REGEXP_HR)) {
    result.horizontalRules.push(m[0]);
  }

  for (const m of working.matchAll(REGEXP_UL_LIST)) {
    result.unorderedLists.push(m[1]);
  }

  for (const m of working.matchAll(REGEXP_OL_LIST)) {
    result.orderedLists.push(m[1]);
  }

  for (const m of working.matchAll(REGEXP_HTML)) {
    result.html.push(m[0]);
  }

  return result;
}
