import js from '@eslint/js';

export default [
  {
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      'src/**/*.js',
      'src/**/*.d.ts',
    ],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-control-regex': 'off',
      'no-useless-escape': 'off',
      'no-unused-vars': 'off',
    },
  },
];
