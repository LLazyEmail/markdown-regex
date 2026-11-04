import { describe, expect, it } from 'vitest';
import { parseFrontmatter } from '../src/frontmatter';
import { extractCustomBlocks, listBlockRules, registerBlockRule } from '../src/blocks';
import { prepareForEmail, EMAIL_PACKAGE_VERSION } from '../src/email';
import { REGEXP_EMPTY_UL } from '../src/cleanup';

describe('subpath stubs', () => {
  it('frontmatter stub returns content unchanged', () => {
    const r = parseFrontmatter('# Hi');
    expect(r.hasFrontmatter).toBe(false);
    expect(r.content).toBe('# Hi');
    expect(r.data).toBeNull();
  });

  it('blocks stub registry and empty extract', () => {
    registerBlockRule({ name: 'note', order: 10 });
    expect(listBlockRules().some((r) => r.name === 'note')).toBe(true);
    expect(extractCustomBlocks(':::note\nhi\n:::')).toEqual([]);
  });

  it('email stub is identity', () => {
    expect(prepareForEmail('x')).toBe('x');
    expect(EMAIL_PACKAGE_VERSION).toMatch(/^\d+\./);
  });

  it('cleanup still exports empty-list helpers', () => {
    expect(REGEXP_EMPTY_UL.flags).toContain('g');
  });
});
