/**
 * Flat `:::name` custom blocks (stub — implemented in a follow-up PR).
 *
 * Non-nested containers. Fence-first ordering via a small rule registry.
 *
 * @packageDocumentation
 */

export interface CustomBlock {
  name: string;
  body: string;
  raw: string;
}

export type BlockRule = {
  name: string;
  /** Lower runs earlier. Default 100. */
  order?: number;
};

const registry: BlockRule[] = [];

/** Register a flat custom-block name for extract ordering. */
export function registerBlockRule(rule: BlockRule): void {
  registry.push(rule);
  registry.sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
}

/** Current rule registry (copy). */
export function listBlockRules(): BlockRule[] {
  return registry.map((r) => ({ ...r }));
}

/**
 * Extract flat `:::name ... :::` containers. Stub returns [].
 */
export function extractCustomBlocks(_markdown: string): CustomBlock[] {
  return [];
}

/** Match a single flat custom block fence. Captures: [1] name, [2] body. */
export const REGEXP_CUSTOM_BLOCK =
  /^:::([A-Za-z][\w-]*)\s*\r?\n([\s\S]*?)\r?\n:::\s*$/gm;
