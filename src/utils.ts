/**
 * Flexible newline pattern that matches Unix (\n), Windows (\r\n) and old Mac (\r).
 * Use this instead of hard-coding platform-specific newlines.
 */
export const NEWLINE = '(?:\r\n|\r|\n)';

/**
 * Helper to create a RegExp that is newline-aware.
 */
export function nl(pattern: string, flags = 'g'): RegExp {
  return new RegExp(pattern.replace(/\\n/g, NEWLINE), flags);
}
