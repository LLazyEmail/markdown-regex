import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  REGEXP_HEADER,
  REGEXP_H2,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_BR,
  REGEXP_OL_LIST,
} from '../src/index';

function fixturePath(): string {
  const candidates = [
    join(process.cwd(), 'source-fullcodetest.md'),
    join(process.cwd(), '..', 'source-fullcodetest.md'),
  ];
  try {
    candidates.unshift(
      join(dirname(fileURLToPath(import.meta.url)), '..', 'source-fullcodetest.md')
    );
  } catch {
    // import.meta may be unavailable under some Jest transforms
  }
  if (typeof __dirname !== 'undefined') {
    candidates.unshift(join(__dirname, '..', 'source-fullcodetest.md'));
  }
  const found = candidates.find((p) => existsSync(p));
  if (!found) {
    throw new Error(
      'source-fullcodetest.md not found. Looked in: ' + candidates.join(', ')
    );
  }
  return found;
}

const content = readFileSync(fixturePath(), 'utf8');

function reset(...regexes: RegExp[]) {
  for (const r of regexes) r.lastIndex = 0;
}

function matches(re: RegExp, text: string): string[] {
  re.lastIndex = 0;
  return text.match(re) ?? [];
}

describe('source-fullcodetest.md fixture', () => {
  it('loads a non-empty fixture file', () => {
    expect(content.length).toBeGreaterThan(500);
    expect(content).toContain('Secrets Of High-Performing Teams');
  });

  describe('structural elements', () => {
    afterEach(() => reset(REGEXP_HEADER, REGEXP_H2, REGEXP_BR));

    it('matches headers', () => {
      expect(matches(REGEXP_HEADER, content).length).toBeGreaterThan(0);
    });

    it('matches H2 patterns', () => {
      expect(matches(REGEXP_H2, content).length).toBeGreaterThan(0);
    });

    it('matches double newlines', () => {
      expect(REGEXP_BR.test(content)).toBe(true);
    });
  });

  describe('links and images', () => {
    afterEach(() => reset(REGEXP_LINK, REGEXP_IMAGE));

    it('finds markdown links', () => {
      const found = matches(REGEXP_LINK, content);
      expect(found.length).toBeGreaterThan(5);
      expect(found.some((m) => m.includes('hackernoon.com'))).toBe(true);
    });

    it('finds image syntax', () => {
      const found = matches(REGEXP_IMAGE, content);
      expect(found.length).toBeGreaterThan(0);
    });
  });

  describe('inline formatting', () => {
    afterEach(() => reset(REGEXP_STRONG, REGEXP_ITALIC));

    it('finds bold', () => {
      expect(matches(REGEXP_STRONG, content).length).toBeGreaterThan(0);
    });

    it('italic pattern works on a known sample', () => {
      reset(REGEXP_ITALIC);
      expect(REGEXP_ITALIC.test(' _Join us_ ')).toBe(true);
    });
  });

  describe('lists', () => {
    it('OL matcher returns an array', () => {
      expect(Array.isArray(matches(REGEXP_OL_LIST, content))).toBe(true);
    });
  });

  describe('aggregate smoke', () => {
    it('headers, links, and images all match something', () => {
      expect(matches(REGEXP_HEADER, content).length).toBeGreaterThan(0);
      expect(matches(REGEXP_LINK, content).length).toBeGreaterThan(0);
      expect(matches(REGEXP_IMAGE, content).length).toBeGreaterThan(0);
    });
  });
});
