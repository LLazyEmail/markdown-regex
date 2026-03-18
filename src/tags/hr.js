import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_HR = new RegExp(`${newLine}-{5,}`, "g");

export { REGEXP_HR };
