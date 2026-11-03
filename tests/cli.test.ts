import { describe, expect, it } from 'vitest';
import { parseMode, render, usageMessage } from '../src/cli';

describe('cli helpers', () => {
  it('parseMode accepts known modes', () => {
    expect(parseMode('links')).toBe('links');
    expect(parseMode('headers')).toBe('headers');
    expect(parseMode('nope')).toBeNull();
  });

  it('render links / headers / images / extract', () => {
    expect(JSON.parse(render('links', '[a](https://ex.com)'))).toEqual([
      { text: 'a', url: 'https://ex.com' },
    ]);
    expect(JSON.parse(render('headers', '# Title\n## Sec'))).toEqual([
      { level: 1, text: 'Title' },
      { level: 2, text: 'Sec' },
    ]);
    expect(JSON.parse(render('images', '![x](./x.png)'))).toEqual([
      { alt: 'x', url: './x.png' },
    ]);
    const all = JSON.parse(
      render('extract', '# Title\n\n[a](https://ex.com)\n\n```js\n[no](pe)\n```\n'),
    );
    expect(all.headers[0].text).toBe('Title');
    expect(all.links).toEqual([{ text: 'a', url: 'https://ex.com' }]);
    expect(all.codeBlocks[0].language).toBe('js');
  });

  it('usageMessage mentions modes', () => {
    expect(usageMessage()).toContain('links|headers|images|extract');
  });
});
