import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_HEADER = new RegExp(`${newLine}(#+)(.*)`, "g");

const REGEXP_H2 = /^## (.*$)/gim;
const REGEXP_H3 = /^### (.*$)/gim;

export { REGEXP_HEADER, REGEXP_H2, REGEXP_H3 };
