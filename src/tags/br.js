import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_BR = new RegExp(`((${newLine}){2,})`, "g");

export { REGEXP_BR };
