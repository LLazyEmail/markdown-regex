/**
 * JSON CLI for markdown-regex extract helpers.
 *
 * Usage:
 *   markdown-regex <links|headers|images|extract> [file|-]
 *   cat README.md | markdown-regex links
 *
 * Reads a file path or stdin (`-` / no path). Prints JSON to stdout.
 */
import { readFileSync } from 'node:fs';
import { extract, extractHeaders, extractImages, extractLinks } from '@markdown-regex/core';

export type CliMode = 'links' | 'headers' | 'images' | 'extract';

const MODES = new Set<string>(['links', 'headers', 'images', 'extract']);

export function usageMessage(): string {
  return `Usage: markdown-regex <links|headers|images|extract> [file|-]

Examples:
  markdown-regex links README.md
  markdown-regex headers -
  cat doc.md | markdown-regex extract
`;
}

/** Pure helper: mode + markdown → pretty JSON string. */
export function render(mode: CliMode, markdown: string): string {
  switch (mode) {
    case 'links':
      return JSON.stringify(extractLinks(markdown), null, 2);
    case 'headers':
      return JSON.stringify(extractHeaders(markdown), null, 2);
    case 'images':
      return JSON.stringify(extractImages(markdown), null, 2);
    case 'extract':
      return JSON.stringify(extract(markdown), null, 2);
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
}

export function parseMode(raw: string | undefined): CliMode | null {
  if (!raw || !MODES.has(raw)) return null;
  return raw as CliMode;
}

function readInput(pathArg: string | undefined): string {
  if (!pathArg || pathArg === '-') {
    return readFileSync(0, 'utf8');
  }
  return readFileSync(pathArg, 'utf8');
}

export function main(argv: string[]): number {
  const args = argv.slice(2);
  if (args.includes('-h') || args.includes('--help')) {
    process.stdout.write(usageMessage());
    return 0;
  }
  const mode = parseMode(args[0]);
  if (!mode) {
    process.stderr.write(usageMessage());
    return 1;
  }
  try {
    const markdown = readInput(args[1]);
    process.stdout.write(`${render(mode, markdown)}\n`);
    return 0;
  } catch (err) {
    process.stderr.write(`${err instanceof Error ? err.message : String(err)}\n`);
    return 1;
  }
}

const entry = process.argv[1] ?? '';
const isDirect =
  entry.endsWith('/cli.js') ||
  entry.endsWith('\\cli.js') ||
  entry.endsWith('/markdown-regex') ||
  entry.endsWith('\\markdown-regex');

if (isDirect) {
  process.exitCode = main(process.argv);
}
