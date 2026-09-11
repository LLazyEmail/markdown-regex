/**
 * Matches quoted text using `:"...":` syntax.
 * Captures the quoted content.
 * Example: `::"quoted text":`
 */
const REGEXP_Q = /\:"(.*?)\":/g;

export { REGEXP_Q };
