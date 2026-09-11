/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts'],
  // Ignore known-broken / duplicate legacy test folders that still need cleanup
  testPathIgnorePatterns: [
    '/node_modules/',
    '/tests/olga/',
    '/tests/empty-blockqoute/', // typo folder, duplicate
  ],
  moduleNameMapper: {
    '^markdown-regex$': '<rootDir>/dist/index.cjs',
  },
  transform: {},
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts'],
  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
};
