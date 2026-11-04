import { describe, expect, it } from 'vitest';
import { extract } from '../src/extract';

describe('extract()', () => {
  it('pulls headers, links, images, and emphasis', () => {
    const md = `# Title

See [link](https://ex.com) and a picture ![img](./a.png).

This has **bold** text and also ~~del~~ marks.
`;
    const r = extract(md);
    expect(r.headers).toEqual([{ level: 1, text: 'Title' }]);
    expect(r.links).toEqual(
      expect.arrayContaining([{ text: 'link', url: 'https://ex.com' }]),
    );
    expect(r.images).toEqual([{ alt: 'img', url: './a.png' }]);
    expect(r.bold).toEqual(expect.arrayContaining(['bold']));
    expect(r.strikethrough).toEqual(expect.arrayContaining(['del']));
  });

  it('is code-aware: ignores links inside fenced and inline code', () => {
    const md = `# H

\`\`\`js
[no](https://inside-fence)
\`\`\`

Inline \`[no](https://inline)\` then [yes](https://ok).
`;
    const r = extract(md);
    expect(r.codeBlocks).toHaveLength(1);
    expect(r.codeBlocks[0].language).toBe('js');
    expect(r.codeBlocks[0].code).toContain('[no](https://inside-fence)');
    expect(r.inlineCode).toContain('[no](https://inline)');
    expect(r.links).toEqual([{ text: 'yes', url: 'https://ok' }]);
  });

  it('captures raw HTML tags and blockquotes', () => {
    const r = extract('<div class="x">hi</div>\n\n> quoted\n\n# T\n');
    expect(r.html.some((h) => h.includes('div'))).toBe(true);
    expect(r.blockquotes.length).toBeGreaterThan(0);
    expect(r.headers).toEqual([{ level: 1, text: 'T' }]);
  });

  it('reports list markers when present', () => {
    const r = extract('Hello\n\n* item a\n* item b\n\n1. first\n2. second\n');
    expect(r.unorderedLists.length).toBeGreaterThan(0);
    expect(r.orderedLists.length).toBeGreaterThan(0);
  });
});

describe('extract() capture-group alignment', () => {
  it('extracts italic via REGEXP_ITALIC group [3]', () => {
    const r = extract('A *italic* word and _also_ here.\n');
    expect(r.italic).toEqual(expect.arrayContaining(['italic', 'also']));
  });

  it('extracts strong via REGEXP_STRONG groups [1]/[2]', () => {
    const r = extract('**star** and __under__\n');
    expect(r.bold).toEqual(expect.arrayContaining(['star', 'under']));
  });

  it('extracts horizontal rules from consolidated REGEXP_HR', () => {
    const r = extract('# T\n\n-----\n\nMore\n');
    expect(r.horizontalRules.length).toBeGreaterThan(0);
  });
});
