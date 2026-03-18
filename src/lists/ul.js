import os from "os";

const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

const REGEXP_UL_LIST = new RegExp(
  `${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`,
  "g"
);

export { REGEXP_UL_LIST };
