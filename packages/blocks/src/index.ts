/**
 * Flat `:::name` custom blocks for markdown-regex.
 *
 * Non-nested containers only. Processing order is **fence-first**: fenced
 * code is stripped before custom blocks are matched, then a small rule
 * registry controls extract ordering for known block names.
 *
 * Nested / remark-based email rendering is intentionally deferred.
 *
 * @packageDocumentation
 */

export interface CustomBlock {
  name: string;
  body: string;
  raw: string;
  index: number;
}

export type BlockRule = {
  name: string;
  /** Lower runs earlier. Default 100. */
  order?: number;
};

const registry: BlockRule[] = [];

/** Register a flat custom-block name for extract ordering. */
export function registerBlockRule(rule: BlockRule): void {
  const existing = registry.findIndex((r) => r.name === rule.name);
  if (existing >= 0) registry.splice(existing, 1);
  registry.push({ name: rule.name, order: rule.order ?? 100 });
  registry.sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.name.localeCompare(b.name));
}

/** Clear the rule registry (tests). */
export function clearBlockRules(): void {
  registry.length = 0;
}

/** Current rule registry (copy). */
export function listBlockRules(): BlockRule[] {
  return registry.map((r) => ({ ...r }));
}

/**
 * Matches a flat custom block fence.
 * Captures: [1] name, [2] body.
 *
 * Flags: `gm`. Does not match nested `:::` inside the body as a new open.
 */
export const REGEXP_CUSTOM_BLOCK =
  /^:::([A-Za-z][\w-]*)[ \t]*\r?\n([\s\S]*?)\r?\n:::[ \t]*$/gm;

/** Fenced code — same shape as core, inlined to avoid a hard package cycle at source. */
const REGEXP_FENCED_CODE =
  /(?:^|\n)(`{3,}|~{3,})([\w-]*)\r?\n([\s\S]*?)\r?\n\1(?=\n|$)/g;

/**
 * Extract flat `:::name ... :::` containers.
 * Fence-first: fenced code regions are blanked before block matching so
 * `:::` inside code fences is ignored.
 */
export function extractCustomBlocks(markdown: string): CustomBlock[] {
  const working = markdown.replace(REGEXP_FENCED_CODE, (match) =>
    '\n'.repeat(match.split('\n').length - 1) + (match.endsWith('\n') ? '' : ''),
  );

  const found: CustomBlock[] = [];
  for (const m of working.matchAll(REGEXP_CUSTOM_BLOCK)) {
    found.push({
      name: m[1],
      body: m[2],
      raw: m[0],
      index: m.index ?? 0,
    });
  }

  if (registry.length === 0) {
    return found.sort((a, b) => a.index - b.index);
  }

  const order = new Map(registry.map((r, i) => [r.name, r.order ?? 100 + i]));
  return found.sort((a, b) => {
    const ao = order.has(a.name) ? (order.get(a.name) as number) : 10_000;
    const bo = order.has(b.name) ? (order.get(b.name) as number) : 10_000;
    if (ao !== bo) return ao - bo;
    return a.index - b.index;
  });
}
