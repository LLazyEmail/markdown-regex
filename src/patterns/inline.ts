/**
 * Inline Markdown patterns for v3 (links, images, strong, italic, del, inline code).
 *
 * Consolidated structure: smaller surface, fewer files.
 * All patterns are global. Reset `.lastIndex` or prefer `matchAll` / extract helpers.
 *
 * @packageDocumentation
 */

export const REGEXP_LINK = /\[([^\[]*?)\]\(([^)]+?)\)/g;
export const REGEXP_IMAGE = /!\[([^\]]*?)\]\(([^)]+?)\)/g;
export const REGEXP_STRONG = /\*\*([^*]+)\*\*|__([^_]+)__/g;
export const REGEXP_ITALIC = /(?<!\*)\*(?!\*)([^*]+)\*(?!\*)|(?<!_)_(?!_)([^_]+)_(?!_)/g;
export const REGEXP_DEL = /~~([^~]+)~~/g;
export const REGEXP_INLINE_CODE = /`([^`]+)`/g;
