/**
 * Block-level Markdown patterns for v3 (headers, lists, blockquotes, HR, fenced code, HTML).
 *
 * Consolidated structure: smaller surface, fewer files.
 * All patterns are global. Reset `.lastIndex` or prefer `matchAll` / extract helpers.
 *
 * @packageDocumentation
 */

export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;
export const REGEXP_H2 = /^##\s+(.*)$/gim;
export const REGEXP_H3 = /^###\s+(.*)$/gim;

export const REGEXP_BLOCKQUOTE = /^>\s?(.*)$/gm;
export const REGEXP_HR = /^(-{5,}|\*{5,}|_{5,})\s*$/gm;

export const REGEXP_UL_LIST = /^\s*[-*+]\s+(.*)$/gm;
export const REGEXP_OL_LIST = /^\s*\d+\.\s+(.*)$/gm;

export const REGEXP_FENCED_CODE = /^```(\w*)\n([\s\S]*?)\n```$/gm;

export const REGEXP_HTML = /<[^>]+>/g;
