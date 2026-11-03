import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

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
    include: ['tests/**/*.test.ts', 'packages/*/tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts', 'packages/core/src/**/*.ts'],
      exclude: ['src/cli.ts', 'packages/core/src/**/*.js'],
      thresholds: {
        lines: 80,
        statements: 80,
        functions: 80,
      },
    },
  },
});
