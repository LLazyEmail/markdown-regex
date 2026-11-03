import { describe, expect, it } from 'vitest';
import { parseFrontmatter, parseSimpleYaml } from '../src/index';

describe('parseFrontmatter', () => {
  it('returns unchanged content when no fence', () => {
    const r = parseFrontmatter('# Title\n\nHi');
    expect(r.hasFrontmatter).toBe(false);
    expect(r.data).toBeNull();
    expect(r.content).toBe('# Title\n\nHi');
  });

  it('strips fence and parses scalars', () => {
    const md = `---
title: Hello
draft: false
count: 3
---
# Body
`;
    const r = parseFrontmatter(md);
    expect(r.hasFrontmatter).toBe(true);
    expect(r.data).toEqual({ title: 'Hello', draft: false, count: 3 });
    expect(r.content).toBe('# Body\n');
  });

  it('parses nested maps and block lists', () => {
    const md = `---
meta:
  author: Ada
tags:
  - news
  - email
---
text
`;
    const r = parseFrontmatter(md);
    expect(r.data).toEqual({
      meta: { author: 'Ada' },
      tags: ['news', 'email'],
    });
    expect(r.content).toBe('text\n');
  });

  it('parses inline lists', () => {
    const r = parseFrontmatter(`---
tags: [a, b, c]
---
x
`);
    expect(r.data).toEqual({ tags: ['a', 'b', 'c'] });
  });
});

describe('parseSimpleYaml', () => {
  it('coerces null/bool/number', () => {
    expect(parseSimpleYaml('a: null\nb: true\nc: 1.5\n')).toEqual({
      a: null,
      b: true,
      c: 1.5,
    });
  });
});
