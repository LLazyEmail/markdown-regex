'use strict';

const fs = require('fs');
const path = require('path');

function loadMarkdownFile(filePath) {
  return fs.readFileSync(path.resolve(filePath), 'utf-8');
}

module.exports = { loadMarkdownFile };
