import { describe, expect, it } from 'vitest';
import { parseFrontmatter } from '../src/frontmatter';
import { extractCustomBlocks, listBlockRules, registerBlockRule } from '../src/blocks';
import { prepareForEmail, EMAIL_PACKAGE_VERSION } from '../src/email';
import { REGEXP_EMPTY_UL } from '../src/cleanup';

describe('subpath stubs', () => {
  it('frontmatter parses optional YAML fence', () => {
    const plain = parseFrontmatter('# Hi');
    expect(plain.hasFrontmatter).toBe(false);
    expect(plain.content).toBe('# Hi');
    const withFm = parseFrontmatter('---\ntitle: X\n---\n# Hi');
    expect(withFm.hasFrontmatter).toBe(true);
    expect(withFm.data).toEqual({ title: 'X' });
    expect(withFm.content).toBe('# Hi');
  });

  it('blocks extracts flat ::: containers', () => {
    registerBlockRule({ name: 'note', order: 10 });
    expect(listBlockRules().some((r) => r.name === 'note')).toBe(true);
    const blocks = extractCustomBlocks(':::note\nhi\n:::');
    expect(blocks).toHaveLength(1);
    expect(blocks[0].name).toBe('note');
    expect(blocks[0].body).toBe('hi');
  });

  it('email stub is identity', () => {
    expect(prepareForEmail('x')).toBe('x');
    expect(EMAIL_PACKAGE_VERSION).toMatch(/^\d+\./);
  });

  it('cleanup still exports empty-list helpers', () => {
    expect(REGEXP_EMPTY_UL.flags).toContain('g');
  });
});
