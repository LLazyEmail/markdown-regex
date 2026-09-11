import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches two or more consecutive newlines (paragraph breaks).
 * Platform-aware: handles both Windows (\r\n) and Unix (\n) line endings.
 * Captures the consecutive newline sequence.
 */
const REGEXP_BR = new RegExp(`((${newLine}){2,})`, "g");

export { REGEXP_BR };
