/**
 * Matches consecutive unordered list HTML tags with optional whitespace.
 * Used to clean up redundant list HTML.
 * Example: `</ul><ul>` or `</ul> <ul>`
 */
const REGEXP_EMPTY_UL = /<\/ul>\s?<ul>/g;

export { REGEXP_EMPTY_UL };
