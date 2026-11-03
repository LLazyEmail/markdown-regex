/**
 * Lightweight "parsable" check using markdown-regex extract.
 *
 * Completes without throw and within a soft time bound → parsable.
 * Useful for the planned validation server / AI-agent gates.
 */
import { extract } from './extract';

export interface ParsableResult {
  parsable: boolean;
  extract?: ReturnType<typeof extract>;
  error?: string;
  durationMs: number;
}

const SOFT_TIMEOUT_MS = 100;

export function isParsable(markdown: string): ParsableResult {
  const start = performance.now();
  try {
    const result = extract(markdown);
    const durationMs = performance.now() - start;
    return {
      parsable: durationMs < SOFT_TIMEOUT_MS,
      extract: result,
      durationMs,
    };
  } catch (err) {
    return {
      parsable: false,
      error: err instanceof Error ? err.message : String(err),
      durationMs: performance.now() - start,
    };
  }
}
