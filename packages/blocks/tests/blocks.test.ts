import { describe, expect, it, beforeEach } from 'vitest';
import {
  extractCustomBlocks,
  registerBlockRule,
  clearBlockRules,
  listBlockRules,
  REGEXP_CUSTOM_BLOCK,
} from '../src/index';

beforeEach(() => clearBlockRules());

describe('REGEXP_CUSTOM_BLOCK', () => {
  it('matches a flat fence', () => {
    const md = ':::note\nhello\n:::';
    const m = [...md.matchAll(REGEXP_CUSTOM_BLOCK)][0];
    expect(m[1]).toBe('note');
    expect(m[2]).toBe('hello');
  });
});

describe('extractCustomBlocks', () => {
  it('extracts multiple flat blocks in document order by default', () => {
    const md = `# T

:::note
one
:::

para

:::warning
two
:::
`;
    const blocks = extractCustomBlocks(md);
    expect(blocks.map((b) => b.name)).toEqual(['note', 'warning']);
    expect(blocks[0].body).toBe('one');
    expect(blocks[1].body).toBe('two');
  });

  it('ignores ::: inside fenced code (fence-first)', () => {
    const md = `\`\`\`md
:::note
inside
:::
\`\`\`

:::note
outside
:::
`;
    const blocks = extractCustomBlocks(md);
    expect(blocks).toHaveLength(1);
    expect(blocks[0].body).toBe('outside');
  });

  it('orders by rule registry when registered', () => {
    registerBlockRule({ name: 'warning', order: 1 });
    registerBlockRule({ name: 'note', order: 50 });
    const md = `:::note
n
:::

:::warning
w
:::
`;
    const blocks = extractCustomBlocks(md);
    expect(blocks.map((b) => b.name)).toEqual(['warning', 'note']);
  });

  it('listBlockRules returns a copy', () => {
    registerBlockRule({ name: 'tip', order: 3 });
    const a = listBlockRules();
    a[0].name = 'mutated';
    expect(listBlockRules()[0].name).toBe('tip');
  });
});
