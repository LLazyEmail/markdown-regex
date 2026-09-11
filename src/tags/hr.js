import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches horizontal rule lines (5 or more dashes).
 * Platform-aware: handles both Windows (\r\n) and Unix (\n) line endings.
 * Example: `-----`
 */
const REGEXP_HR = new RegExp(`${newLine}-{5,}`, "g");

export { REGEXP_HR };
