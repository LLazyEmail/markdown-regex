/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  testEnvironment: 'node',
  // Look for tests in the tests/ folder
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts'],
  // Allow importing the built package and TypeScript source
  moduleNameMapper: {
    '^markdown-regex$': '<rootDir>/dist/index.cjs',
    '^@root(.*)$': '<rootDir>/src$1',
  },
  // Transform TypeScript if needed
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: false,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  // The old tests use CommonJS require – keep them working
  extensionsToTreatAsEsm: [],
};
