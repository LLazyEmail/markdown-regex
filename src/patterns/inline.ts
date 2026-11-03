/**
 * Inline Markdown patterns for v3 (links, images, emphasis, inline code).
 *
 * Consolidated structure: smaller surface, fewer files.
 * All patterns are global. Reset `.lastIndex` or prefer `matchAll` / extract helpers.
 *
 * @packageDocumentation
 */

export const REGEXP_LINK = /\[([^\[]*?)\]\(([^)]+?)\)/g;
export const REGEXP_IMAGE = /!\[([^\[]*?)\]\(([^)]+?)\)/g;
export const REGEXP_STRONG = /\*\*(.+?)\*\*|__(.+?)__/g;
export const REGEXP_ITALIC = /(^|[\s>])(\*|_)(.+?)\2([\s<]|$)/g;
export const REGEXP_DEL = /~~(.+?)~~/g;
export const REGEXP_INLINE_CODE = /(?<!\\)(`+)([^`\n]+?)\1(?!`)/g;
