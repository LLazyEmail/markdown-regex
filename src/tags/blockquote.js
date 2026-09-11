import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches blockquote lines starting with `>` or `&gt;` (HTML entity).
 * Platform-aware: handles both Windows (\r\n) and Unix (\n) line endings.
 * Captures the blockquote marker and content.
 * Example: `> blockquote text`
 */
const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, "g");

export { REGEXP_BLOCKQUOTE };
