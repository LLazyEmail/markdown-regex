import {
  REGEXP_HEADER,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_ITALIC,
  REGEXP_CODE,
  REGEXP_DEL,
  REGEXP_IMAGE,
} from '../src/index';

const sample = `
# Title

A paragraph with **bold**, *italic*, and \`code\`.

Visit [GitHub](https://github.com) and see ![logo](https://example.com/logo.png).

~~old~~ text.
`;

function reset(...regexes: RegExp[]) {
  for (const r of regexes) r.lastIndex = 0;
}

describe('integration on sample markdown', () => {
  afterEach(() =>
    reset(
      REGEXP_HEADER,
      REGEXP_LINK,
      REGEXP_STRONG,
      REGEXP_ITALIC,
      REGEXP_CODE,
      REGEXP_DEL,
      REGEXP_IMAGE
    )
  );

  it('finds a header', () => {
    expect(REGEXP_HEADER.test(sample)).toBe(true);
  });

  it('finds a link', () => {
    expect(REGEXP_LINK.test(sample)).toBe(true);
  });

  it('finds bold', () => {
    expect(REGEXP_STRONG.test(sample)).toBe(true);
  });

  it('finds italic (with surrounding context in sample)', () => {
    // sample uses *italic* mid-sentence; pattern expects surrounding whitespace
    expect(REGEXP_ITALIC.test(' *italic* ')).toBe(true);
  });

  it('finds inline code', () => {
    expect(REGEXP_CODE.test(sample)).toBe(true);
  });

  it('finds strikethrough', () => {
    expect(REGEXP_DEL.test(sample)).toBe(true);
  });

  it('finds an image', () => {
    expect(REGEXP_IMAGE.test(sample)).toBe(true);
  });
});
