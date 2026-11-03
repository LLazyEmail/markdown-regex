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

export const REGEXP_BLOCKQUOTE = /(?:\r\n|\r|\n)(?:>|>)(.*)/g;
export const REGEXP_HR = /^(-{5,}|\*{5,}|_{5,})\s*$/gm;

export const REGEXP_UL_LIST = /(?:^|\r\n|\r|\n)(?:\s{4})?\*(.*)/gm;
export const REGEXP_OL_LIST = /(?:^|\r\n|\r|\n)\d+\.(.*)/gm;

/** Matches fenced code blocks. Captures: [1] fence, [2] language, [3] body. */
export const REGEXP_FENCED_CODE = /(?:^|\n)(`{3,}|~{3,})([\w-]*)\r?\n([\s\S]*?)\r?\n\1(?=\n|$)/g;

export const REGEXP_HTML = /<[^>]+>/g;
