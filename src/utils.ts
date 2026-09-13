/** Unix / Windows / old-Mac newline as a RegExp source fragment. */
export const NEWLINE = String.raw`(?:\r\n|\r|\n)`;

export function nl(pattern: string, flags = 'g'): RegExp {
  return new RegExp(pattern.replace(/\n/g, NEWLINE), flags);
}
