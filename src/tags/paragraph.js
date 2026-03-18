import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_PARAGRAPH = new RegExp(`${newLine}(.+?)${newLine}`, "g");

export { REGEXP_PARAGRAPH };
