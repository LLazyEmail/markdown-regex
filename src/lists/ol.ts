import { NEWLINE } from '../utils';

/** Matches ordered list items: 1. item */
export const REGEXP_OL_LIST = new RegExp(NEWLINE + '[0-9]+\\.(.*)', 'g');
