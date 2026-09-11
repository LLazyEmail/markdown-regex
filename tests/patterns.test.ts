import {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_DEL,
  REGEXP_CODE,
  REGEXP_Q,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} from '../src/index';

function reset(...regexes: RegExp[]) {
  for (const r of regexes) r.lastIndex = 0;
}

describe('REGEXP_HEADER', () => {
  afterEach(() => reset(REGEXP_HEADER));

  it('matches headers after a newline (unix)', () => {
    expect(REGEXP_HEADER.test('\n# Title')).toBe(true);
    expect(REGEXP_HEADER.test('\n## Subtitle')).toBe(true);
  });

  it('matches headers after a newline (windows)', () => {
    expect(REGEXP_HEADER.test('\r\n# Title')).toBe(true);
  });

  it('does not match plain text', () => {
    expect(REGEXP_HEADER.test('plain text')).toBe(false);
  });
});

describe('REGEXP_LINK', () => {
  afterEach(() => reset(REGEXP_LINK));

  it('matches a simple link', () => {
    expect(REGEXP_LINK.test('[GitHub](https://github.com)')).toBe(true);
  });

  it('captures text and url', () => {
    const m = REGEXP_LINK.exec('[GitHub](https://github.com)');
    expect(m?.[1]).toBe('GitHub');
    expect(m?.[2]).toBe('https://github.com');
  });

  it('does not match plain text', () => {
    expect(REGEXP_LINK.test('no link here')).toBe(false);
  });
});

describe('REGEXP_IMAGE', () => {
  afterEach(() => reset(REGEXP_IMAGE));

  it('matches image syntax', () => {
    expect(REGEXP_IMAGE.test('![alt](https://example.com/a.png)')).toBe(true);
  });
});

describe('REGEXP_STRONG', () => {
  afterEach(() => reset(REGEXP_STRONG));

  it('matches **bold** and __bold__', () => {
    expect(REGEXP_STRONG.test('**bold**')).toBe(true);
    expect(REGEXP_STRONG.test('__bold__')).toBe(true);
  });
});

describe('REGEXP_ITALIC', () => {
  afterEach(() => reset(REGEXP_ITALIC));

  it('matches italic with surrounding context', () => {
    expect(REGEXP_ITALIC.test(' *italic* ')).toBe(true);
    expect(REGEXP_ITALIC.test(' _italic_ ')).toBe(true);
  });

  it('does not match plain text', () => {
    expect(REGEXP_ITALIC.test('Not italic')).toBe(false);
  });
});

describe('REGEXP_DEL', () => {
  afterEach(() => reset(REGEXP_DEL));

  it('matches strikethrough', () => {
    expect(REGEXP_DEL.test('~~deleted~~')).toBe(true);
  });
});

describe('REGEXP_CODE', () => {
  afterEach(() => reset(REGEXP_CODE));

  it('matches inline code', () => {
    expect(REGEXP_CODE.test('`code`')).toBe(true);
  });
});

describe('REGEXP_Q', () => {
  afterEach(() => reset(REGEXP_Q));

  it('matches custom quote syntax', () => {
    expect(REGEXP_Q.test(':"quoted":')).toBe(true);
  });
});

describe('REGEXP_BLOCKQUOTE', () => {
  afterEach(() => reset(REGEXP_BLOCKQUOTE));

  it('matches blockquote after newline', () => {
    expect(REGEXP_BLOCKQUOTE.test('\n> quote')).toBe(true);
  });
});

describe('REGEXP_HR', () => {
  afterEach(() => reset(REGEXP_HR));

  it('matches 5+ dashes after newline', () => {
    expect(REGEXP_HR.test('\n-----')).toBe(true);
  });
});

describe('REGEXP_BR', () => {
  afterEach(() => reset(REGEXP_BR));

  it('matches two or more newlines', () => {
    expect(REGEXP_BR.test('a\n\nb')).toBe(true);
  });
});

describe('HTML cleanup helpers', () => {
  afterEach(() =>
    reset(REGEXP_EMPTY_BLOCKQUOTE, REGEXP_EMPTY_UL, REGEXP_EMPTY_OL)
  );

  it('REGEXP_EMPTY_BLOCKQUOTE', () => {
    expect(REGEXP_EMPTY_BLOCKQUOTE.test('</blockquote><blockquote>')).toBe(true);
  });

  it('REGEXP_EMPTY_UL', () => {
    expect(REGEXP_EMPTY_UL.test('</ul><ul>')).toBe(true);
  });

  it('REGEXP_EMPTY_OL', () => {
    expect(REGEXP_EMPTY_OL.test('</ol><ol>')).toBe(true);
  });
});
