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
} from "./patterns";

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
 * Capture groups (must stay aligned with `src/patterns/`):
 * - REGEXP_HEADER: [2] `#` run, [3] text
 * - REGEXP_INLINE_CODE: [1] fence run, [2] code text
 * - REGEXP_STRONG: [1] `**` text or [2] `__` text
 * - REGEXP_ITALIC: [3] inner text (context groups [1]/[2]/[4])
 * - REGEXP_DEL / REGEXP_BLOCKQUOTE / lists: [1] text
 * - REGEXP_FENCED_CODE: [2] language, [3] body
 *
 * @example extract('# Title\n\n[GitHub](https://github.com)')
 * @example Does not treat `[link](url)` inside a fenced block as a link
 */
/**
 * Placeholders for stripped code. Private-use code points, so no pattern can
 * match them: the old `__CODE_BLOCK__` / `__INLINE_CODE__` markers were
 * reported as bold by REGEXP_STRONG's `__text__` branch.
 */
const CODE_BLOCK_PLACEHOLDER = "\uE000";
const INLINE_CODE_PLACEHOLDER = "\uE001";

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
      language: m[2] || "",
      code: m[3],
    });
  }
  working = working.replace(
    REGEXP_FENCED_CODE,
    `\n${CODE_BLOCK_PLACEHOLDER}\n`
  );

  const inlineMatches = [...working.matchAll(REGEXP_INLINE_CODE)];
  for (const m of inlineMatches) {
    // REGEXP_INLINE_CODE captures: [1] fence, [2] content
    result.inlineCode.push(m[2]);
  }
  working = working.replace(REGEXP_INLINE_CODE, INLINE_CODE_PLACEHOLDER);

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

  // Unwrap bold before looking for italic so `**b**` is not also reported as
  // italic `*b*`, while `**bold *it* bold**` still yields italic `it`.
  const withoutStrong = working.replace(
    REGEXP_STRONG,
    (_m, a?: string, b?: string) => a ?? b ?? ""
  );
  for (const m of withoutStrong.matchAll(REGEXP_ITALIC)) {
    // REGEXP_ITALIC captures: [1] lead, [2] delim, [3] text, [4] trail
    if (m[3] != null) result.italic.push(m[3]);
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
