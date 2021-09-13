import os from "os";

const platform = os.platform();

export const newLine = platform === "win32" ? "\r\n" : "\n";

