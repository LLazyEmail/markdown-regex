/**
 * YAML frontmatter pre-pass (stub — implemented in a follow-up PR).
 *
 * @packageDocumentation
 */

export interface FrontmatterResult {
  /** Parsed frontmatter object, or `null` when none present. */
  data: Record<string, unknown> | null;
  /** Markdown body with the frontmatter fence removed. */
  content: string;
  /** True when a `---` / `---` fence was detected at the start. */
  hasFrontmatter: boolean;
}

/**
 * Split optional YAML frontmatter from a Markdown document.
 * Stub: returns the input unchanged until the frontmatter PR lands.
 */
export function parseFrontmatter(markdown: string): FrontmatterResult {
  return {
    data: null,
    content: markdown,
    hasFrontmatter: false,
  };
}
