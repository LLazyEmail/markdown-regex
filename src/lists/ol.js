import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches ordered list items (lines starting with a number and period).
 * Captures the list item number and content.
 * Platform-aware: handles both Windows (\r\n) and Unix (\n) line endings.
 * Example: `1. list item`, `2. another item`
 */
const REGEXP_OL_LIST = new RegExp(`${newLine}[0-9]+\\.(.*)`, "g");

export { REGEXP_OL_LIST };
