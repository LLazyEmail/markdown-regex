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
 * Extracts structured data from a Markdown string using the library's regex constants.
 *
 * IMPORTANT: Fenced code blocks are extracted FIRST and removed from the working string
 * so that other patterns (links, bold, etc.) do not match syntax inside code.
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

  // --- Step 1: Extract fenced code blocks and remove them from the source ---
  let working = markdown;

  const fencedMatches = [...working.matchAll(REGEXP_FENCED_CODE)];
  for (const m of fencedMatches) {
    result.codeBlocks.push({
      language: m[2] || '',
      code: m[3],
    });
  }
  // Replace fenced blocks with a placeholder so later patterns don't match inside them
  working = working.replace(REGEXP_FENCED_CODE, '\n__CODE_BLOCK__\n');

  // --- Step 2: Extract inline code and remove it ---
  const inlineMatches = [...working.matchAll(REGEXP_INLINE_CODE)];
  for (const m of inlineMatches) {
    result.inlineCode.push(m[2]);
  }
  working = working.replace(REGEXP_INLINE_CODE, '__INLINE_CODE__');

  // --- Step 3: Run all other patterns against the cleaned string ---

  // Headers: capture level from the `#` count
  for (const m of working.matchAll(REGEXP_HEADER)) {
    const hashes = m[1]; // assumes REGEXP_HEADER has a capture group for the # prefix
    result.headers.push({
      level: hashes.length,
      text: m[2].trim(),
    });
  }

  // Links
  for (const m of working.matchAll(REGEXP_LINK)) {
    result.links.push({ text: m[1], url: m[2] });
  }

  // Images
  for (const m of working.matchAll(REGEXP_IMAGE)) {
    result.images.push({ alt: m[1], url: m[2] });
  }

  // Bold
  for (const m of working.matchAll(REGEXP_STRONG)) {
    result.bold.push(m[1]);
  }

  // Italic
  for (const m of working.matchAll(REGEXP_ITALIC)) {
    result.italic.push(m[1]);
  }

  // Strikethrough
  for (const m of working.matchAll(REGEXP_DEL)) {
    result.strikethrough.push(m[1]);
  }

  // Blockquotes
  for (const m of working.matchAll(REGEXP_BLOCKQUOTE)) {
    result.blockquotes.push(m[1]);
  }

  // Horizontal rules
  for (const m of working.matchAll(REGEXP_HR)) {
    result.horizontalRules.push(m[0]);
  }

  // Unordered lists
  for (const m of working.matchAll(REGEXP_UL_LIST)) {
    result.unorderedLists.push(m[1]);
  }

  // Ordered lists
  for (const m of working.matchAll(REGEXP_OL_LIST)) {
    result.orderedLists.push(m[1]);
  }

  // Raw HTML
  for (const m of working.matchAll(REGEXP_HTML)) {
    result.html.push(m[0]);
  }

  return result;
}
