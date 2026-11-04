import { defineConfig } from 'tsup';

/** Bundle private workspace packages so the published tarball has zero @markdown-regex/* runtime deps. */
const noExternal = [/^@markdown-regex\//];

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
      cleanup: 'src/cleanup.ts',
      frontmatter: 'src/frontmatter.ts',
      blocks: 'src/blocks.ts',
      email: 'src/email.ts',
    },
    format: ['cjs', 'esm', 'iife'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: false,
    target: 'es2020',
    globalName: 'MarkdownRegex',
    noExternal,
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.cjs' : format === 'iife' ? '.global.js' : '.js',
      };
    },
  },
  {
    entry: { cli: 'src/cli.ts' },
    format: ['esm'],
    dts: false,
    sourcemap: true,
    clean: false,
    minify: false,
    target: 'es2020',
    banner: { js: '#!/usr/bin/env node' },
    noExternal,
    outExtension() {
      return { js: '.js' };
    },
  },
]);
