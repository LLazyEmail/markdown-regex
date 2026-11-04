import { describe, expect, it } from 'vitest';
import {
  REGEXP_HEADER,
  REGEXP_H2,
  REGEXP_H3,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_FENCED_CODE,
  REGEXP_HTML,
} from '../src/patterns/block';

function firstGroup(re: RegExp, input: string, index: number): string | undefined {
  const m = [...input.matchAll(re)][0];
  return m?.[index];
}

describe('consolidated block patterns', () => {
  it('matches ATX headers', () => {
    expect(firstGroup(REGEXP_HEADER, '# Title', 3)).toBe('Title');
    expect(firstGroup(REGEXP_H2, '## H2', 1)).toBe('H2');
    expect(firstGroup(REGEXP_H3, '### H3', 1)).toBe('H3');
  });

  it('matches blockquote and HR', () => {
    expect(firstGroup(REGEXP_BLOCKQUOTE, '\n> quote', 1)).toBe(' quote');
    expect(firstGroup(REGEXP_BLOCKQUOTE, '\n&gt; encoded', 1)).toBe(' encoded');
    expect('-----'.match(REGEXP_HR)).toBeTruthy();
  });

  it('matches lists', () => {
    expect(firstGroup(REGEXP_UL_LIST, '* item', 1)).toBe(' item');
    expect(firstGroup(REGEXP_OL_LIST, '1. item', 1)).toBe(' item');
  });

  it('matches fenced code and HTML', () => {
    const code = '```js\nconsole.log(1)\n```';
    expect(code.match(REGEXP_FENCED_CODE)).toBeTruthy();
    expect('<div>'.match(REGEXP_HTML)).toBeTruthy();
  });
});
