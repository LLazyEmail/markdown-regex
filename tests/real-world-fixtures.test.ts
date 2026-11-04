/**
 * Real-world fixture suite.
 *
 * Discovers every folder under fixtures/real-world/<name>/ that contains
 * input.md, runs extract / frontmatter / blocks, and file-snapshots the
 * results beside the fixture. Add a fixture by dropping in a new folder;
 * refresh snapshots with `pnpm test:fixtures:update`.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect, beforeEach } from 'vitest';
import { extract } from '@markdown-regex/core';
import { parseFrontmatter } from '@markdown-regex/frontmatter';
import {
  extractCustomBlocks,
  clearBlockRules,
} from '@markdown-regex/blocks';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FIXTURES_ROOT = join(ROOT, 'fixtures', 'real-world');

function discoverFixtures(): string[] {
  if (!existsSync(FIXTURES_ROOT)) return [];
  return readdirSync(FIXTURES_ROOT)
    .filter((name) => {
      const dir = join(FIXTURES_ROOT, name);
      return (
        statSync(dir).isDirectory() &&
        existsSync(join(dir, 'input.md'))
      );
    })
    .sort();
}

const fixtures = discoverFixtures();

describe('real-world fixtures', () => {
  it('discovers at least one fixture folder', () => {
    expect(fixtures.length).toBeGreaterThan(0);
  });

  for (const name of fixtures) {
    describe(name, () => {
      const dir = join(FIXTURES_ROOT, name);
      const input = readFileSync(join(dir, 'input.md'), 'utf8');

      beforeEach(() => {
        clearBlockRules();
      });

      it('matches extract snapshot', async () => {
        const result = extract(input);
        await expect(result).toMatchFileSnapshot(
          join(dir, 'expected.extract.json'),
        );
      });

      it('matches frontmatter snapshot', async () => {
        const { data, hasFrontmatter, content } = parseFrontmatter(input);
        // Snapshot parsed data + fence flag; content length catches body drift
        // without duplicating the full markdown body in every update.
        await expect({
          hasFrontmatter,
          data,
          contentLength: content.length,
          contentStartsWith: content.slice(0, 120),
        }).toMatchFileSnapshot(join(dir, 'expected.frontmatter.json'));
      });

      it('matches blocks snapshot', async () => {
        const blocks = extractCustomBlocks(input).map(
          ({ name: blockName, body, index }) => ({
            name: blockName,
            body,
            index,
          }),
        );
        await expect(blocks).toMatchFileSnapshot(
          join(dir, 'expected.blocks.json'),
        );
      });
    });
  }
});
