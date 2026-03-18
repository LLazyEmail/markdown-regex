'use strict';

const {
  REGEXP_HEADER,
  REGEXP_H2,
  REGEXP_H3,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
} = require('../src/index');

// Helper: reset lastIndex on all global regexes before each test
beforeEach(() => {
  [
    REGEXP_HEADER, REGEXP_H2, REGEXP_H3,
    REGEXP_IMAGE, REGEXP_LINK,
    REGEXP_STRONG, REGEXP_DEL, REGEXP_Q, REGEXP_CODE,
    REGEXP_BLOCKQUOTE, REGEXP_HR, REGEXP_PARAGRAPH, REGEXP_BR,
    REGEXP_EMPTY_BLOCKQUOTE, REGEXP_EM,
    REGEXP_UL_LIST, REGEXP_OL_LIST, REGEXP_EMPTY_UL, REGEXP_EMPTY_OL,
  ].forEach((r) => { r.lastIndex = 0; });
});

// ─── Header Patterns ─────────────────────────────────────────────────────────

describe('REGEXP_HEADER: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\n# Heading 1',
      '\n## Heading 2',
      '\n### Heading 3',
      '\n#### Heading 4',
      '\n# Heading with trailing space   ',
      '\n# Heading with special chars: & < >',
      '\n# Héading with Unicode: café',
      '\n# 123 Numeric heading',
    ];

    it('should match valid header patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_HEADER.lastIndex = 0;
        expect(REGEXP_HEADER.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'No leading newline header',
      'plain text',
      '',
    ];

    it('should not match non-header content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_HEADER.lastIndex = 0;
        expect(REGEXP_HEADER.test(input)).toBe(false);
      });
    });
  });

  it('should match multiple headers in sequence', () => {
    const multiHeader = '\n# First\n## Second\n### Third';
    REGEXP_HEADER.lastIndex = 0;
    const matches = multiHeader.match(REGEXP_HEADER);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });
});

describe('REGEXP_H2: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '## Simple H2',
      '## H2 with trailing spaces   ',
      '## H2 with special chars: @#$',
      '## H2 Unicode: 日本語',
    ];

    it('should match valid H2 patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_H2.lastIndex = 0;
        expect(REGEXP_H2.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '### Not an H2',
      '# Not an H2',
      'plain text',
      '',
    ];

    it('should not match non-H2 content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_H2.lastIndex = 0;
        expect(REGEXP_H2.test(input)).toBe(false);
      });
    });
  });
});

describe('REGEXP_H3: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '### Simple H3',
      '### H3 with trailing spaces   ',
      '### H3 Unicode: español',
    ];

    it('should match valid H3 patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_H3.lastIndex = 0;
        expect(REGEXP_H3.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '## Not an H3',
      '# Not an H3',
      '#### Not an H3',
      'plain text',
    ];

    it('should not match non-H3 content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_H3.lastIndex = 0;
        expect(REGEXP_H3.test(input)).toBe(false);
      });
    });
  });
});

// ─── Link Patterns ───────────────────────────────────────────────────────────

describe('REGEXP_LINK: edge cases', () => {
  describe('valid patterns', () => {
    const validLinks = [
      '[text](https://example.com)',
      '[text with spaces](https://example.com)',
      '[link](http://example.com/path?query=1&other=2)',
      '[link](https://example.com/path#anchor)',
      '[link with **bold** inside](https://example.com)',
      '[a](b)',
      '[Unicode text: 日本語](https://example.com)',
    ];

    it('should match valid link patterns', () => {
      validLinks.forEach((link) => {
        REGEXP_LINK.lastIndex = 0;
        expect(REGEXP_LINK.test(link)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidLinks = [
      '[text without url',
      'text(url)',
      'plain text',
      '',
    ];

    it('should not match malformed link patterns', () => {
      invalidLinks.forEach((link) => {
        REGEXP_LINK.lastIndex = 0;
        expect(REGEXP_LINK.test(link)).toBe(false);
      });
    });
  });

  it('should match multiple links in same text', () => {
    const text = '[first](https://first.com) and [second](https://second.com)';
    REGEXP_LINK.lastIndex = 0;
    const matches = text.match(REGEXP_LINK);
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(2);
  });

  it('should capture link text and URL correctly', () => {
    const text = '[my link](https://example.com)';
    REGEXP_LINK.lastIndex = 0;
    const match = REGEXP_LINK.exec(text);
    expect(match).not.toBeNull();
    expect(match[1]).toBe('my link');
    expect(match[2]).toBe('https://example.com');
  });
});

// ─── Image Patterns ──────────────────────────────────────────────────────────

describe('REGEXP_IMAGE: edge cases', () => {
  describe('valid patterns', () => {
    const validImages = [
      '![alt text](image.png)',
      '![alt text](https://example.com/image.jpg)',
      '![alt with spaces](image.gif)',
      '![Unicode alt: café](image.png)',
      '![special chars: <>&](image.png)',
    ];

    it('should match valid image patterns', () => {
      validImages.forEach((img) => {
        REGEXP_IMAGE.lastIndex = 0;
        expect(REGEXP_IMAGE.test(img)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidImages = [
      '![](image.png)',
      '[not an image](url)',
      'plain text',
      '',
    ];

    it('should not match malformed image patterns', () => {
      invalidImages.forEach((img) => {
        REGEXP_IMAGE.lastIndex = 0;
        expect(REGEXP_IMAGE.test(img)).toBe(false);
      });
    });
  });

  it('should capture alt text and URL correctly', () => {
    const text = '![my image](https://example.com/pic.png)';
    REGEXP_IMAGE.lastIndex = 0;
    const match = REGEXP_IMAGE.exec(text);
    expect(match).not.toBeNull();
    expect(match[1]).toBe('my image');
    expect(match[2]).toBe('https://example.com/pic.png');
  });
});

// ─── Strong (Bold) Patterns ──────────────────────────────────────────────────

describe('REGEXP_STRONG: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '**bold text**',
      '__bold text__',
      '**bold with spaces**',
      '**bold with special chars: @#$**',
      '**Unicode: café**',
      '**123**',
    ];

    it('should match valid bold patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_STRONG.lastIndex = 0;
        expect(REGEXP_STRONG.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'plain text',
      '*single asterisk*',
      '',
    ];

    it('should not match non-bold content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_STRONG.lastIndex = 0;
        expect(REGEXP_STRONG.test(input)).toBe(false);
      });
    });
  });

  it('should match bold text within a sentence', () => {
    const text = 'This has **bold** in it';
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test(text)).toBe(true);
  });
});

// ─── Emphasis (Italic) Patterns ──────────────────────────────────────────────

describe('REGEXP_EM: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      ' *italic text* ',
      ' _italic text_ ',
      '> *italic after blockquote marker* ',
      ' *Unicode: café* ',
    ];

    it('should match valid emphasis patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_EM.lastIndex = 0;
        expect(REGEXP_EM.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'plain text',
      '*no surrounding whitespace*',
      '',
    ];

    it('should not match non-emphasis content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_EM.lastIndex = 0;
        expect(REGEXP_EM.test(input)).toBe(false);
      });
    });
  });
});

// ─── Strikethrough (Del) Patterns ────────────────────────────────────────────

describe('REGEXP_DEL: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '~~strikethrough~~',
      '~~text with spaces~~',
      '~~special chars: @#$~~',
      '~~Unicode: café~~',
      '~~123~~',
    ];

    it('should match valid strikethrough patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_DEL.lastIndex = 0;
        expect(REGEXP_DEL.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'plain text',
      '~single tilde~',
      '',
    ];

    it('should not match non-strikethrough content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_DEL.lastIndex = 0;
        expect(REGEXP_DEL.test(input)).toBe(false);
      });
    });
  });
});

// ─── Code Patterns ───────────────────────────────────────────────────────────

describe('REGEXP_CODE: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '`inline code`',
      '`code with spaces`',
      '`code with special chars: @#$`',
      '`console.log("hello")`',
      '`<html>`',
      '`arr[0]`',
    ];

    it('should match valid inline code patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_CODE.lastIndex = 0;
        expect(REGEXP_CODE.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'plain text',
      'code without backticks',
      '',
    ];

    it('should not match non-code content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_CODE.lastIndex = 0;
        expect(REGEXP_CODE.test(input)).toBe(false);
      });
    });
  });

  it('should match multiple code spans in the same text', () => {
    const text = 'Use `foo` and `bar` together';
    REGEXP_CODE.lastIndex = 0;
    const matches = text.match(REGEXP_CODE);
    expect(matches).not.toBeNull();
    expect(matches.length).toBe(2);
  });
});

// ─── Blockquote Patterns ─────────────────────────────────────────────────────

describe('REGEXP_BLOCKQUOTE: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\n> simple blockquote',
      '\n> blockquote with special chars: @#$',
      '\n> Unicode blockquote: café',
      '\n&gt; HTML-entity blockquote',
      '\n> ',
    ];

    it('should match valid blockquote patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_BLOCKQUOTE.lastIndex = 0;
        expect(REGEXP_BLOCKQUOTE.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'plain text',
      '> no leading newline',
      '',
    ];

    it('should not match non-blockquote content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_BLOCKQUOTE.lastIndex = 0;
        expect(REGEXP_BLOCKQUOTE.test(input)).toBe(false);
      });
    });
  });
});

// ─── Horizontal Rule Patterns ────────────────────────────────────────────────

describe('REGEXP_HR: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\n-----',
      '\n------',
      '\n----------',
    ];

    it('should match valid horizontal rule patterns (5+ dashes after newline)', () => {
      validInputs.forEach((input) => {
        REGEXP_HR.lastIndex = 0;
        expect(REGEXP_HR.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '-----',
      '\n----',
      '\n---',
      'plain text',
      '',
    ];

    it('should not match invalid horizontal rule patterns', () => {
      invalidInputs.forEach((input) => {
        REGEXP_HR.lastIndex = 0;
        expect(REGEXP_HR.test(input)).toBe(false);
      });
    });
  });
});

// ─── Paragraph Patterns ──────────────────────────────────────────────────────

describe('REGEXP_PARAGRAPH: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\nsome text\n',
      '\ntext with special chars: @#$\n',
      '\nUnicode: café\n',
    ];

    it('should match valid paragraph patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_PARAGRAPH.lastIndex = 0;
        expect(REGEXP_PARAGRAPH.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'no surrounding newlines',
      '\n\n',
      '',
    ];

    it('should not match non-paragraph content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_PARAGRAPH.lastIndex = 0;
        expect(REGEXP_PARAGRAPH.test(input)).toBe(false);
      });
    });
  });
});

// ─── Line Break Patterns ─────────────────────────────────────────────────────

describe('REGEXP_BR: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\n\n',
      '\n\n\n',
      'text\n\nmore text',
    ];

    it('should match double (or more) newlines', () => {
      validInputs.forEach((input) => {
        REGEXP_BR.lastIndex = 0;
        expect(REGEXP_BR.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '\n',
      'plain text',
      'text\nmore text',
      '',
    ];

    it('should not match single newlines or plain text', () => {
      invalidInputs.forEach((input) => {
        REGEXP_BR.lastIndex = 0;
        expect(REGEXP_BR.test(input)).toBe(false);
      });
    });
  });
});

// ─── Quote (REGEXP_Q) Patterns ───────────────────────────────────────────────

describe('REGEXP_Q: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      ':"simple quote":',
      ':"quote with spaces":',
      ':"special chars: @#$":',
      ':"Unicode: café":',
      ':"":',
    ];

    it('should match valid quote patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_Q.lastIndex = 0;
        expect(REGEXP_Q.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '"just quotes"',
      ':no closing colon"',
      'plain text',
      '',
    ];

    it('should not match non-quote content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_Q.lastIndex = 0;
        expect(REGEXP_Q.test(input)).toBe(false);
      });
    });
  });
});

// ─── Empty Blockquote Patterns ───────────────────────────────────────────────

describe('REGEXP_EMPTY_BLOCKQUOTE: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '</blockquote><blockquote>',
    ];

    it('should match empty blockquote HTML tags', () => {
      validInputs.forEach((input) => {
        REGEXP_EMPTY_BLOCKQUOTE.lastIndex = 0;
        expect(REGEXP_EMPTY_BLOCKQUOTE.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '<blockquote></blockquote>',
      '<blockquote>content</blockquote>',
      'plain text',
      '',
    ];

    it('should not match non-empty-blockquote content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_EMPTY_BLOCKQUOTE.lastIndex = 0;
        expect(REGEXP_EMPTY_BLOCKQUOTE.test(input)).toBe(false);
      });
    });
  });
});

// ─── List Patterns ───────────────────────────────────────────────────────────

describe('REGEXP_UL_LIST: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\n* Item 1\n',
      '\n* Item with spaces\n',
      '\n* Item with special chars: @#$\n',
      '\n* Unicode item: café\n',
      '\n* First\n* Second\n',
    ];

    it('should match valid unordered list patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_UL_LIST.lastIndex = 0;
        expect(REGEXP_UL_LIST.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      'Item 1',
      '* no leading newline',
      '',
    ];

    it('should not match non-list content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_UL_LIST.lastIndex = 0;
        expect(REGEXP_UL_LIST.test(input)).toBe(false);
      });
    });
  });
});

describe('REGEXP_OL_LIST: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '\n1. Item 1',
      '\n2. Item 2',
      '\n10. Item 10',
      '\n1. Item with special chars: @#$',
      '\n1. Unicode item: café',
    ];

    it('should match valid ordered list patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_OL_LIST.lastIndex = 0;
        expect(REGEXP_OL_LIST.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '1. no leading newline',
      'Item 1',
      '',
    ];

    it('should not match non-ordered-list content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_OL_LIST.lastIndex = 0;
        expect(REGEXP_OL_LIST.test(input)).toBe(false);
      });
    });
  });
});

describe('REGEXP_EMPTY_UL: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '</ul><ul>',
      '</ul> <ul>',
    ];

    it('should match empty UL HTML patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_EMPTY_UL.lastIndex = 0;
        expect(REGEXP_EMPTY_UL.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '<ul></ul>',
      '<ul>content</ul>',
      'plain text',
      '',
    ];

    it('should not match non-empty-UL content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_EMPTY_UL.lastIndex = 0;
        expect(REGEXP_EMPTY_UL.test(input)).toBe(false);
      });
    });
  });
});

describe('REGEXP_EMPTY_OL: edge cases', () => {
  describe('valid patterns', () => {
    const validInputs = [
      '</ol><ol>',
      '</ol> <ol>',
    ];

    it('should match empty OL HTML patterns', () => {
      validInputs.forEach((input) => {
        REGEXP_EMPTY_OL.lastIndex = 0;
        expect(REGEXP_EMPTY_OL.test(input)).toBe(true);
      });
    });
  });

  describe('invalid patterns', () => {
    const invalidInputs = [
      '<ol></ol>',
      '<ol>content</ol>',
      'plain text',
      '',
    ];

    it('should not match non-empty-OL content', () => {
      invalidInputs.forEach((input) => {
        REGEXP_EMPTY_OL.lastIndex = 0;
        expect(REGEXP_EMPTY_OL.test(input)).toBe(false);
      });
    });
  });
});

// ─── Integration: Mixed Markdown Scenarios ───────────────────────────────────

describe('Integration: multiple patterns in the same text', () => {
  const richMarkdown = '\n# Title\n\nA paragraph with **bold** and `code` and ~~del~~.\n\n> blockquote\n\n* Item A\n* Item B\n\n1. First\n\n[link](https://example.com) and ![img alt](image.png)\n\n:"a quote":\n\n\n-----\n\n _em_ \n';

  beforeEach(() => {
    [
      REGEXP_HEADER, REGEXP_H2, REGEXP_H3,
      REGEXP_IMAGE, REGEXP_LINK,
      REGEXP_STRONG, REGEXP_DEL, REGEXP_Q, REGEXP_CODE,
      REGEXP_BLOCKQUOTE, REGEXP_HR, REGEXP_PARAGRAPH, REGEXP_BR,
      REGEXP_EMPTY_BLOCKQUOTE, REGEXP_EM,
      REGEXP_UL_LIST, REGEXP_OL_LIST, REGEXP_EMPTY_UL, REGEXP_EMPTY_OL,
    ].forEach((r) => { r.lastIndex = 0; });
  });

  it('REGEXP_HEADER matches title in rich markdown', () => {
    expect(REGEXP_HEADER.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_STRONG matches bold in rich markdown', () => {
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_CODE matches inline code in rich markdown', () => {
    REGEXP_CODE.lastIndex = 0;
    expect(REGEXP_CODE.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_DEL matches strikethrough in rich markdown', () => {
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_BLOCKQUOTE matches blockquote in rich markdown', () => {
    REGEXP_BLOCKQUOTE.lastIndex = 0;
    expect(REGEXP_BLOCKQUOTE.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_LINK matches link in rich markdown', () => {
    REGEXP_LINK.lastIndex = 0;
    expect(REGEXP_LINK.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_IMAGE matches image in rich markdown', () => {
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_IMAGE.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_Q matches custom quote in rich markdown', () => {
    REGEXP_Q.lastIndex = 0;
    expect(REGEXP_Q.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_HR matches horizontal rule in rich markdown', () => {
    REGEXP_HR.lastIndex = 0;
    expect(REGEXP_HR.test(richMarkdown)).toBe(true);
  });

  it('REGEXP_BR matches double newline in rich markdown', () => {
    REGEXP_BR.lastIndex = 0;
    expect(REGEXP_BR.test(richMarkdown)).toBe(true);
  });

  it('patterns do not interfere: link and image coexist', () => {
    const text = '[link text](https://link.com) and ![img alt](image.png)';
    REGEXP_LINK.lastIndex = 0;
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_LINK.test(text)).toBe(true);
    REGEXP_LINK.lastIndex = 0;
    REGEXP_IMAGE.lastIndex = 0;
    expect(REGEXP_IMAGE.test(text)).toBe(true);
  });

  it('bold and italic can appear in the same text without interference', () => {
    const text = ' **bold** and _italic_ ';
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test(text)).toBe(true);
    REGEXP_EM.lastIndex = 0;
    expect(REGEXP_EM.test(text)).toBe(true);
  });

  it('code and strikethrough can appear together', () => {
    const text = '`code` and ~~del~~';
    REGEXP_CODE.lastIndex = 0;
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_CODE.test(text)).toBe(true);
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test(text)).toBe(true);
  });
});

// ─── Boundary and Single Character Edge Cases ────────────────────────────────

describe('Boundary conditions', () => {
  it('REGEXP_STRONG: empty bold markers (**) return a match (empty content)', () => {
    REGEXP_STRONG.lastIndex = 0;
    expect(REGEXP_STRONG.test('****')).toBe(true);
  });

  it('REGEXP_CODE: empty backtick pair matches', () => {
    REGEXP_CODE.lastIndex = 0;
    expect(REGEXP_CODE.test('``')).toBe(true);
  });

  it('REGEXP_DEL: empty strikethrough matches', () => {
    REGEXP_DEL.lastIndex = 0;
    expect(REGEXP_DEL.test('~~~~')).toBe(true);
  });

  it('REGEXP_Q: empty quote matches', () => {
    REGEXP_Q.lastIndex = 0;
    expect(REGEXP_Q.test(':"":')).toBe(true);
  });

  it('REGEXP_H2: single character heading', () => {
    REGEXP_H2.lastIndex = 0;
    expect(REGEXP_H2.test('## A')).toBe(true);
  });

  it('REGEXP_H3: single character heading', () => {
    REGEXP_H3.lastIndex = 0;
    expect(REGEXP_H3.test('### B')).toBe(true);
  });
});
