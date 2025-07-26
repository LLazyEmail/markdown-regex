import os from 'os';

const platform = os.platform();
const newLine = platform === 'win32' ? '\r\n' : '\n';


// Common flags for regex patterns
const REGEX_FLAGS = 'gim';

// Define regex patterns as constants
const REGEXP_HEADER = new RegExp(`${newLine}(#+)(.*)`, 'gim');
const REGEXP_H2 = /^## (.*)$/gim;
const REGEXP_H3 = /^### (.*)$/gim;

const REGEXP_IMAGE = /!\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_LINK = /\[([^\[]+)\]\(([^\)]+)\)/g;
const REGEXP_STRONG = /(\*\*|__)(.*?)(\*?)\1/g;
const REGEXP_DEL = /~~(.*?)~~/g;
const REGEXP_Q = /:\"(.*?)\"/g;
const REGEXP_CODE = /`(.*?)`/g;

const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, 'g');
const REGEXP_HR = new RegExp(`${newLine}-{5,}`, 'g');
const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, 'g');

const REGEXP_BR = new RegExp(`((${newLine}){2,})`, 'g');
const REGEXP_EMPTY_BLOCKQUOTE = /<\/blockquote><blockquote>/g;
const REGEXP_EM = /(\s|>)(\*|_)(.*?)\2(\s|<)/g;

// Export as an organized object
export const MarkdownTagsRegexes = {
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
};
