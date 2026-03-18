'use strict';

const path = require('path');
const { loadMarkdownFile } = require('../helpers/file-loader');
const {
  REGEXP_HEADER,
  REGEXP_IMAGE,
  REGEXP_LINK,
  REGEXP_STRONG,
  REGEXP_DEL,
  REGEXP_Q,
  REGEXP_CODE,
  REGEXP_UL_LIST,
  REGEXP_OL_LIST,
  REGEXP_BLOCKQUOTE,
  REGEXP_HR,
  REGEXP_PARAGRAPH,
  REGEXP_EMPTY_UL,
  REGEXP_EMPTY_OL,
  REGEXP_BR,
  REGEXP_EMPTY_BLOCKQUOTE,
  REGEXP_EM,
} = require('../../src/index');

const contentPath = path.resolve(__dirname, '../../source-fullcodetest.md');
const content = loadMarkdownFile(contentPath);

describe('Integration: regex patterns against source-fullcodetest.md', () => {

  test('REGEXP_HEADER matches headers in the content', () => {
    const matches = content.match(REGEXP_HEADER);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_IMAGE matches images in the content', () => {
    const matches = content.match(REGEXP_IMAGE);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_LINK matches links in the content', () => {
    const matches = content.match(REGEXP_LINK);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_OL_LIST matches ordered list items in the content', () => {
    const matches = content.match(REGEXP_OL_LIST);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_BR matches line breaks in the content', () => {
    const matches = content.match(REGEXP_BR);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_EM matches emphasis in the content', () => {
    const matches = content.match(REGEXP_EM);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_PARAGRAPH matches paragraphs in the content', () => {
    const matches = content.match(REGEXP_PARAGRAPH);
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_STRONG matches bold-like patterns in the content', () => {
    const matches = content.match(REGEXP_STRONG);
    // source-fullcodetest.md contains "** 3. Automation technology...**" which is wrapped with **
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_DEL does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_DEL);
    // source-fullcodetest.md does not contain ~~strikethrough~~ text
    expect(matches).toBeNull();
  });

  test('REGEXP_Q does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_Q);
    // source-fullcodetest.md does not contain :"quoted": text
    expect(matches).toBeNull();
  });

  test('REGEXP_CODE does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_CODE);
    // source-fullcodetest.md does not contain `inline code` spans
    expect(matches).toBeNull();
  });

  test('REGEXP_UL_LIST matches list-like patterns in the content', () => {
    const matches = content.match(REGEXP_UL_LIST);
    // source-fullcodetest.md contains lines starting with * (e.g. "** 3. Automation..." and "***")
    expect(matches).not.toBeNull();
    expect(matches.length).toBeGreaterThan(0);
  });

  test('REGEXP_BLOCKQUOTE does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_BLOCKQUOTE);
    // source-fullcodetest.md does not contain > blockquote lines
    expect(matches).toBeNull();
  });

  test('REGEXP_HR does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_HR);
    // source-fullcodetest.md uses *** for dividers, not ----- (5+ dashes)
    expect(matches).toBeNull();
  });

  test('REGEXP_EMPTY_UL does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_EMPTY_UL);
    // source-fullcodetest.md does not contain HTML list tags
    expect(matches).toBeNull();
  });

  test('REGEXP_EMPTY_OL does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_EMPTY_OL);
    // source-fullcodetest.md does not contain HTML list tags
    expect(matches).toBeNull();
  });

  test('REGEXP_EMPTY_BLOCKQUOTE does not produce false positives on this content', () => {
    const matches = content.match(REGEXP_EMPTY_BLOCKQUOTE);
    // source-fullcodetest.md does not contain HTML blockquote tags
    expect(matches).toBeNull();
  });

});
