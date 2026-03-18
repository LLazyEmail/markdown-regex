import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_BLOCKQUOTE = new RegExp(`${newLine}(&gt;|\\>)(.*)`, "g");

export { REGEXP_BLOCKQUOTE };
