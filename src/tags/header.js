import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

/**
 * Matches markdown headers (lines starting with one or more # characters).
 * Captures header level and content across all heading levels.
 * Example: `# Heading 1`, `## Heading 2`, `### Heading 3`
 */
const REGEXP_HEADER = new RegExp(`${newLine}(#+)(.*)`, "g");

/**
 * Matches markdown level 2 headers (lines starting with exactly ##).
 * Example: `## Heading 2`
 */
const REGEXP_H2 = /^## (.*$)/gim;

/**
 * Matches markdown level 3 headers (lines starting with exactly ###).
 * Example: `### Heading 3`
 */
const REGEXP_H3 = /^### (.*$)/gim;

export { REGEXP_HEADER, REGEXP_H2, REGEXP_H3 };
