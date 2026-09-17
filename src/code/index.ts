/** Matches fenced code blocks: ```lang\ncode\n``` or ~~~lang\ncode\n~~~ */
export const REGEXP_FENCED_CODE = /(?:^|\n)(`{3,}|~{3,})([\w-]*)\r?\n([\s\S]*?)\r?\n\1(?=\n|$)/g;
/** Matches inline code spans: `code` */
export const REGEXP_INLINE_CODE = /(?<!\\)(`+)([^`\n]+?)\1(?!`)/g;
