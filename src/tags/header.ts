/** @example "\n# Title" */
export const REGEXP_HEADER = /(^|\r\n|\r|\n)(#{1,6})\s+(.*)/gm;

/** @example "## Heading" */
export const REGEXP_H2 = /^##\s+(.*)$/gim;

/** @example "### Heading" */
export const REGEXP_H3 = /^###\s+(.*)$/gim;
