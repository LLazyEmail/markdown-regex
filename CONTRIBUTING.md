# Contributing to markdown-regex

Thank you for your interest in contributing to markdown-regex! This document outlines how to get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/markdown-regex.git
   cd markdown-regex
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```

## Development

```bash
npm run dev        # Watch mode (Rollup)
npm run build      # Build distribution files
npm test           # Run tests
npm run lint       # Check linting issues
npm run lint:fix   # Fix linting issues automatically
```

## Adding a New Regex Pattern

1. Add the pattern to the appropriate source file (`src/tags.js` or `src/list.js`)
2. Export it from `src/index.js`
3. Add a TypeScript declaration in `src/index.d.ts`
4. Write tests in the `tests/` directory
5. Update `README.md` to document the new pattern

## Testing

All new patterns must include tests. Run the full test suite before submitting:

```bash
npm test
```

Test files live in `tests/` and follow the naming convention `<pattern-name>.test.js`.

## Pull Request Process

1. Ensure all tests pass: `npm test`
2. Ensure linting passes: `npm run lint`
3. Update `README.md` for any new patterns
4. Update `CHANGELOG.md` under the `[Unreleased]` section
5. Open a pull request against the `main` branch

## Code Style

This project uses ESLint and Prettier. Run `npm run lint:fix` to auto-format your code before committing.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## [Linkedin page of LLazyEmail](https://www.linkedin.com/company/llazyemail/)
