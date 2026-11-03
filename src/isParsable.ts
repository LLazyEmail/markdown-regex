import { extract } from './extract';
import type { ExtractResult } from './extract';

/**
 * Lightweight check that content can be processed by our extract helpers
 * without throwing.
 *
 * "Parsable" here means: `extract()` completed successfully. It does **not**
 * mean CommonMark-compliant or free of edge cases.
 *
 * Useful as a cheap gate before a full parser or in AI-agent tools.
 *
 * @example
 * isParsable('# Hello\n\n[link](https://example.com)')
 * // { ok: true, result: { headers: [...], links: [...], ... } }
 */
export function isParsable(markdown: string): {
  ok: boolean;
  result?: ExtractResult;
  error?: string;
} {
  try {
    const result = extract(markdown);
    return { ok: true, result };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
