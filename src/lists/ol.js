import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_OL_LIST = new RegExp(`${newLine}[0-9]+\\.(.*)`, "g");

export { REGEXP_OL_LIST };
