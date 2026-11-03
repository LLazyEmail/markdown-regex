/**
 * Email-oriented helpers (stub).
 *
 * Nested / remark-based email rendering is intentionally deferred —
 * open a follow-up issue after the flat-blocks PR.
 *
 * @packageDocumentation
 */

/** Newsletter quote syntax already exposed as REGEXP_Q on the root package. */
export const EMAIL_PACKAGE_VERSION = '2.1.1';

/**
 * Placeholder: strip or normalize Markdown for email HTML pipelines.
 * Returns the input unchanged until a dedicated email PR lands.
 */
export function prepareForEmail(markdown: string): string {
  return markdown;
}
