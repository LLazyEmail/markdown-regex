import { describe, expect, it } from 'vitest';
import { markdownExtractTool } from '../examples/mcp-tool-shape';

describe('markdownExtractTool (MCP shape)', () => {
  it('returns JSON text content for links mode', () => {
    const result = markdownExtractTool({
      markdown: '[a](https://ex.com)',
      mode: 'links',
    });
    expect(result.content[0].type).toBe('text');
    expect(JSON.parse(result.content[0].text)).toEqual([
      { text: 'a', url: 'https://ex.com' },
    ]);
  });

  it('defaults to full extract', () => {
    const result = markdownExtractTool({ markdown: '# T\n' });
    const body = JSON.parse(result.content[0].text);
    expect(body.headers).toEqual([{ level: 1, text: 'T' }]);
  });
});
