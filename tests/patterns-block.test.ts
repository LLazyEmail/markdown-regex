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

describe('consolidated block patterns', () => {
  it('matches ATX headers', () => {
    expect('# Title'.match(REGEXP_HEADER)?.[3]).toBe('Title');
    expect('## H2'.match(REGEXP_H2)?.[1]).toBe('H2');
    expect('### H3'.match(REGEXP_H3)?.[1]).toBe('H3');
  });

  it('matches blockquote and HR', () => {
    expect('> quote'.match(REGEXP_BLOCKQUOTE)?.[1]).toBe('quote');
    expect('-----'.match(REGEXP_HR)).toBeTruthy();
  });

  it('matches lists', () => {
    expect('- item'.match(REGEXP_UL_LIST)?.[1]).toBe('item');
    expect('1. item'.match(REGEXP_OL_LIST)?.[1]).toBe('item');
  });

  it('matches fenced code and HTML', () => {
    const code = '```js\nconsole.log(1)\n```';
    expect(code.match(REGEXP_FENCED_CODE)).toBeTruthy();
    expect('<div>'.match(REGEXP_HTML)).toBeTruthy();
  });
});
