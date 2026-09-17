/** Matches raw HTML tags: <div>, </span>, <br/> */
export const REGEXP_HTML = /<\/?[a-z][\w-]*(?:\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/gi;
