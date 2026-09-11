/**
 * Matches markdown image syntax with alt text and URL.
 * Captures both the alt text and the image URL.
 * Example: `![alt text](https://example.com/image.png)`
 */
const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;

export { REGEXP_IMAGE };
