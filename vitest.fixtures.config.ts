import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

/**
 * Separate Vitest config for real-world fixture snapshots.
 * Run via `pnpm test:fixtures` (or `pnpm test:fixtures -- -u` to update).
 */
export default defineConfig({
  resolve: {
    alias: {
      '@markdown-regex/core': path.resolve(root, 'packages/core/src/index.ts'),
      '@markdown-regex/core/cleanup': path.resolve(root, 'packages/core/src/cleanup.ts'),
      '@markdown-regex/frontmatter': path.resolve(root, 'packages/frontmatter/src/index.ts'),
      '@markdown-regex/blocks': path.resolve(root, 'packages/blocks/src/index.ts'),
      '@markdown-regex/email': path.resolve(root, 'packages/email/src/index.ts'),
    },
  },
  test: {
    globals: false,
    environment: 'node',
    include: ['tests/real-world-fixtures.test.ts'],
    // Fixtures are large; keep reporters quiet in CI
    reporters: process.env.CI ? ['default'] : ['default'],
  },
});
