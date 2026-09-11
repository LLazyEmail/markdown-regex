import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches unordered list items (lines starting with `*`).
 * Matches one or more consecutive list items with optional indentation.
 * Platform-aware: handles both Windows (\r\n) and Unix (\n) line endings.
 * Example: `* list item`
 */
const REGEXP_UL_LIST = new RegExp(
  `${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`,
  "g"
);

export { REGEXP_UL_LIST };
