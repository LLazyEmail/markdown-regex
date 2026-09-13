/**
 * Matches markdown image syntax.
 * Captures: [1] alt text, [2] url
 *
 * Example: ![alt text](https://example.com/image.png)
 */
export const REGEXP_IMAGE = new RegExp('!\\[([^\\]]*?)\\]\\(([^)]+?)\\)', 'g');
