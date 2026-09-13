import { NEWLINE } from '../utils';

/**
 * Matches markdown headers (ATX). Works at start of string or after a newline.
 */
export const REGEXP_HEADER = new RegExp(
  '(?:^|' + NEWLINE + ')(#{1,6})\\s*(.*)',
  'gm'
);

export const REGEXP_H2 = new RegExp('^##\\s+(.*)$', 'gim');

export const REGEXP_H3 = new RegExp('^###\\s+(.*)$', 'gim');
