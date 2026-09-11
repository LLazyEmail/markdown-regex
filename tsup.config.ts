import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  target: 'es2020',
  globalName: 'MarkdownRegex',
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : format === 'iife' ? '.global.js' : '.js',
    };
  },
});
