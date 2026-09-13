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

function ok(re: RegExp, input: string): boolean {
  re.lastIndex = 0;
  return re.test(input);
}

describe('REGEXP_HEADER', () => {
  it('matches headers after a newline (unix)', () => {
    expect(ok(REGEXP_HEADER, '\n# Title')).toBe(true);
    expect(ok(REGEXP_HEADER, '\n## Subtitle')).toBe(true);
  });

  it('matches headers after a newline (windows)', () => {
    expect(ok(REGEXP_HEADER, '\r\n# Title')).toBe(true);
  });

  it('does not match plain text', () => {
    expect(ok(REGEXP_HEADER, 'plain text')).toBe(false);
  });
});

describe('REGEXP_LINK', () => {
  it('matches a simple link', () => {
    expect(ok(REGEXP_LINK, '[GitHub](https://github.com)')).toBe(true);
  });

  it('captures text and url', () => {
    REGEXP_LINK.lastIndex = 0;
    const m = REGEXP_LINK.exec('[GitHub](https://github.com)');
    expect(m?.[1]).toBe('GitHub');
    expect(m?.[2]).toBe('https://github.com');
  });

  it('does not match plain text', () => {
    expect(ok(REGEXP_LINK, 'no link here')).toBe(false);
  });
});

describe('REGEXP_IMAGE', () => {
  it('matches image syntax', () => {
    expect(ok(REGEXP_IMAGE, '![alt](https://example.com/a.png)')).toBe(true);
  });
});

describe('REGEXP_STRONG', () => {
  it('matches **bold** and __bold__', () => {
    expect(ok(REGEXP_STRONG, '**bold**')).toBe(true);
    expect(ok(REGEXP_STRONG, '__bold__')).toBe(true);
  });
});

describe('REGEXP_ITALIC', () => {
  it('matches italic with surrounding context', () => {
    expect(ok(REGEXP_ITALIC, ' *italic* ')).toBe(true);
    expect(ok(REGEXP_ITALIC, ' _italic_ ')).toBe(true);
  });

  it('does not match plain text', () => {
    expect(ok(REGEXP_ITALIC, 'Not italic')).toBe(false);
  });
});

describe('REGEXP_DEL', () => {
  it('matches strikethrough', () => {
    expect(ok(REGEXP_DEL, '~~deleted~~')).toBe(true);
  });
});

describe('REGEXP_CODE', () => {
  it('matches inline code', () => {
    expect(ok(REGEXP_CODE, '`code`')).toBe(true);
  });
});

describe('REGEXP_Q', () => {
  it('matches custom quote syntax', () => {
    expect(ok(REGEXP_Q, ':"quoted":')).toBe(true);
  });
});

describe('REGEXP_BLOCKQUOTE', () => {
  it('matches blockquote after newline', () => {
    expect(ok(REGEXP_BLOCKQUOTE, '\n> quote')).toBe(true);
  });
});

describe('REGEXP_HR', () => {
  it('matches 5+ dashes after newline', () => {
    expect(ok(REGEXP_HR, '\n-----')).toBe(true);
  });
});

describe('REGEXP_BR', () => {
  it('matches two or more newlines', () => {
    expect(ok(REGEXP_BR, 'a\n\nb')).toBe(true);
  });
});

describe('HTML cleanup helpers', () => {
  it('REGEXP_EMPTY_BLOCKQUOTE', () => {
    expect(ok(REGEXP_EMPTY_BLOCKQUOTE, '</blockquote><blockquote>')).toBe(true);
  });

  it('REGEXP_EMPTY_UL', () => {
    expect(ok(REGEXP_EMPTY_UL, '</ul><ul>')).toBe(true);
  });

  it('REGEXP_EMPTY_OL', () => {
    expect(ok(REGEXP_EMPTY_OL, '</ol><ol>')).toBe(true);
  });
});
