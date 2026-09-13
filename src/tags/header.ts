/** ATX headers after start-of-string or a newline. */
export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;

export const REGEXP_H2 = /^##\s+(.*)$/gim;

export const REGEXP_H3 = /^###\s+(.*)$/gim;
