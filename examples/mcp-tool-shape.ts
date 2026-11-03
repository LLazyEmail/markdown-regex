/**
 * MCP-friendly usage sketch (not a full MCP server).
 *
 * Shows how an agent tool handler can call markdown-regex extract*
 * helpers and return JSON content blocks.
 *
 * Run after build (typecheck only is fine): the functions below are pure.
 */
import {
  extract,
  extractHeaders,
  extractImages,
  extractLinks,
} from '../src/index';

export type MarkdownExtractMode = 'links' | 'headers' | 'images' | 'all';

export interface MarkdownExtractArgs {
  markdown: string;
  mode?: MarkdownExtractMode;
}

/** Shape compatible with common MCP tool result content arrays. */
export interface McpTextContent {
  type: 'text';
  text: string;
}

/**
 * Example tool implementation: `markdown_extract`.
 * Wire this into your MCP server's tool list with inputSchema:
 * { markdown: string, mode?: 'links'|'headers'|'images'|'all' }
 */
export function markdownExtractTool(args: MarkdownExtractArgs): {
  content: McpTextContent[];
} {
  const mode: MarkdownExtractMode = args.mode ?? 'all';
  const markdown = args.markdown ?? '';
  let payload: unknown;
  switch (mode) {
    case 'links':
      payload = extractLinks(markdown);
      break;
    case 'headers':
      payload = extractHeaders(markdown);
      break;
    case 'images':
      payload = extractImages(markdown);
      break;
    case 'all':
    default:
      payload = extract(markdown);
      break;
  }
  return {
    content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }],
  };
}

// Demo when executed directly:
const isMain = process.argv[1]?.endsWith('mcp-tool-shape.ts');
if (isMain) {
  const demo = markdownExtractTool({
    markdown: '# Hello\n\n[site](https://example.com)\n',
    mode: 'all',
  });
  process.stdout.write(`${demo.content[0].text}\n`);
}
