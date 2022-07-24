import os from "os";
import { REGEXP_IMAGE, REGEXP_LINK, REGEXP_H2, REGEXP_H3 } from './index.js';


const platform = os.platform();

const newLine = platform === "win32" ? "\r\n" : "\n";

// [\s\S]
const recipe_regex = `:::\s*.*:::`;

//const REGEXP_UL_LIST = new RegExp(
//  `${newLine}(((\\s{4})?\\*(.*?)${newLine}){1,})`,
//  "g"
//);
