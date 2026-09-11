import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches paragraph content between newlines.
 * Platform-aware: handles both Windows (\r\n) and Unix (\n) line endings.
 * Captures text content bounded by blank lines.
 */
const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, "g");

export { REGEXP_PARAGRAPH };
