import { describe, expect, it } from 'vitest';
import {
  header,
  link,
  image,
  strong,
  italic,
  fencedCode,
  ulList,
  olList,
  REGEXP_HEADER,
  REGEXP_LINK,
} from '../src/index';

describe('factory wrappers', () => {
  it('returns a fresh RegExp with the same source and flags', () => {
    const a = header();
    const b = header();
    expect(a).toBeInstanceOf(RegExp);
    expect(b).toBeInstanceOf(RegExp);
    expect(a).not.toBe(b);
    expect(a.source).toBe(REGEXP_HEADER.source);
    expect(a.flags).toBe(REGEXP_HEADER.flags);
  });

  it('isolates lastIndex across instances', () => {
    const shared = REGEXP_LINK;
    shared.lastIndex = 0;
    const first = link();
    const second = link();
    const md = '[one](https://a.example) and [two](https://b.example)';
    expect(first.exec(md)?.[0]).toContain('one');
    // Mutating one factory instance must not affect another.
    first.lastIndex = 99;
    second.lastIndex = 0;
    expect(second.exec(md)?.[0]).toContain('one');
  });

  it('covers every exported factory', () => {
    const factories = [header, link, image, strong, italic, fencedCode, ulList, olList];
    for (const factory of factories) {
      const re = factory();
      expect(re).toBeInstanceOf(RegExp);
      expect(re.global).toBe(true);
    }
  });

  it('matches representative markdown with factory regexes', () => {
    expect(header().test('# Title')).toBe(true);
    expect(link().test('[t](https://example.com)')).toBe(true);
    expect(image().test('![alt](https://example.com/a.png)')).toBe(true);
    expect(strong().test('**bold**')).toBe(true);
    expect(italic().test('*italic*')).toBe(true);
    expect(fencedCode().test('```\ncode\n```')).toBe(true);
    expect(ulList().test('* item')).toBe(true);
    expect(olList().test('1. item')).toBe(true);
  });
});
