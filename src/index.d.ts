/**
 * Matches markdown headers (lines starting with one or more # characters).
 * Example: `# Heading 1`, `## Heading 2`
 */
export const REGEXP_HEADER: RegExp;

/**
 * Matches markdown image syntax.
 * Example: `![alt text](https://example.com/image.png)`
 */
export const REGEXP_IMAGE: RegExp;

/**
 * Matches markdown link syntax.
 * Example: `[link text](https://example.com)`
 */
export const REGEXP_LINK: RegExp;

/**
 * Matches bold/strong text using `**` or `__` delimiters.
 * Example: `**bold**`, `__bold__`
 */
export const REGEXP_STRONG: RegExp;

/**
 * Matches strikethrough text using `~~` delimiters.
 * Example: `~~strikethrough~~`
 */
export const REGEXP_DEL: RegExp;

/**
 * Matches quoted text using `:"..."` syntax.
 * Example: `:"quoted text":`
 */
export const REGEXP_Q: RegExp;

/**
 * Matches inline code using backtick delimiters.
 * Example: `` `code` ``
 */
export const REGEXP_CODE: RegExp;

/**
 * Matches unordered list items (lines starting with `*`).
 * Example: `* list item`
 */
export const REGEXP_UL_LIST: RegExp;

/**
 * Matches ordered list items (lines starting with a number and period).
 * Example: `1. list item`
 */
export const REGEXP_OL_LIST: RegExp;

/**
 * Matches blockquote lines starting with `>` or `&gt;`.
 * Example: `> blockquote text`
 */
export const REGEXP_BLOCKQUOTE: RegExp;

/**
 * Matches horizontal rule lines (5 or more dashes).
 * Example: `-----`
 */
export const REGEXP_HR: RegExp;

/**
 * Matches paragraph content between newlines.
 */
export const REGEXP_PARAGRAPH: RegExp;

/**
 * Matches empty unordered list HTML tags (consecutive `</ul><ul>` pairs).
 * Example: `</ul><ul>`
 */
export const REGEXP_EMPTY_UL: RegExp;

/**
 * Matches empty ordered list HTML tags (consecutive `</ol><ol>` pairs).
 * Example: `</ol><ol>`
 */
export const REGEXP_EMPTY_OL: RegExp;

/**
 * Matches two or more consecutive newlines (line breaks).
 */
export const REGEXP_BR: RegExp;

/**
 * Matches consecutive empty blockquote HTML tags.
 * Example: `</blockquote><blockquote>`
 */
export const REGEXP_EMPTY_BLOCKQUOTE: RegExp;

/**
 * Matches italic/emphasis text using `*` or `_` delimiters.
 * Example: `*italic*`, `_italic_`
 */
export const REGEXP_EM: RegExp;
