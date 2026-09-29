import { describe, expect, it } from 'vitest';
import * as api from '../src/index';

/** Nested unbounded quantifiers are the usual ReDoS shape: (a+)+, (.*)*, etc. */
const NESTED_UNBOUNDED = /(\([^)]*[+*][^)]*\))[+*]/;

describe('ReDoS hygiene', () => {
  const regexes = Object.entries(api).filter(
    (entry): entry is [string, RegExp] => entry[0].startsWith('REGEXP_') && entry[1] instanceof RegExp,
  );

  it('exports at least one regex', () => {
    expect(regexes.length).toBeGreaterThan(0);
  });

  it('does not nest unbounded quantifiers on exported patterns', () => {
    const offenders: string[] = [];
    for (const [name, re] of regexes) {
      if (NESTED_UNBOUNDED.test(re.source)) offenders.push(`${name}: /${re.source}/`);
    }
    expect(offenders).toEqual([]);
  });
});
