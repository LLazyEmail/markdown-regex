/**
 * YAML frontmatter pre-pass for markdown-regex.
 *
 * Zero runtime dependencies. Supports a practical subset of YAML:
 * - `key: value` scalars (string / number / boolean / null)
 * - nested maps via 2-space indentation
 * - inline lists: `key: [a, b]`
 * - block lists under a key: `key:\n  - item`
 *
 * Not a full YAML 1.2 parser — anchors, tags, and multiline literals
 * (`|`, `>`) are out of scope. Justify a dependency only if you need those.
 *
 * @packageDocumentation
 */

export interface FrontmatterResult {
  /** Parsed frontmatter object, or `null` when none present. */
  data: Record<string, unknown> | null;
  /** Markdown body with the frontmatter fence removed. */
  content: string;
  /** True when a `---` / `---` fence was detected at the start. */
  hasFrontmatter: boolean;
}

const FENCE = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;

/**
 * Split optional YAML frontmatter from a Markdown document.
 */
export function parseFrontmatter(markdown: string): FrontmatterResult {
  const m = FENCE.exec(markdown);
  if (!m) {
    return { data: null, content: markdown, hasFrontmatter: false };
  }
  const raw = m[1];
  const content = markdown.slice(m[0].length);
  try {
    const data = parseSimpleYaml(raw);
    return { data, content, hasFrontmatter: true };
  } catch {
    return { data: {}, content, hasFrontmatter: true };
  }
}

type Container = Record<string, unknown> | unknown[];

/**
 * Parse a practical YAML subset into a plain object.
 */
export function parseSimpleYaml(source: string): Record<string, unknown> {
  const lines = source.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  const root: Record<string, unknown> = {};
  const stack: { indent: number; container: Container }[] = [
    { indent: -1, container: root },
  ];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trimStart().startsWith('#')) continue;

    const indent = line.match(/^ */)?.[0].length ?? 0;
    const trimmed = line.trim();

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }

    const parent = stack[stack.length - 1].container;

    // Block list item
    if (trimmed.startsWith('- ') || trimmed === '-') {
      const itemRaw = trimmed === '-' ? '' : trimmed.slice(2).trim();
      if (!Array.isArray(parent)) {
        // Orphan list item — skip
        continue;
      }
      if (itemRaw.includes(': ') || (itemRaw.endsWith(':') && itemRaw.length > 1)) {
        // Inline map in list: `- name: x` → { name: x }
        const obj: Record<string, unknown> = {};
        const km = itemRaw.match(/^([^:#]+?):\s*(.*)$/);
        if (km) {
          const k = km[1].trim();
          const v = km[2];
          if (v === '') {
            obj[k] = {};
            parent.push(obj);
            stack.push({ indent, container: obj[k] as Record<string, unknown> });
          } else {
            obj[k] = parseValue(v);
            parent.push(obj);
          }
        } else {
          parent.push(coerceScalar(itemRaw));
        }
      } else {
        parent.push(coerceScalar(itemRaw));
      }
      continue;
    }

    const kv = trimmed.match(/^([^:#]+?):\s*(.*)$/);
    if (!kv || Array.isArray(parent)) continue;

    const key = kv[1].trim();
    const valueRaw = kv[2];

    if (valueRaw.startsWith('[') && valueRaw.endsWith(']')) {
      parent[key] = parseInlineList(valueRaw);
      continue;
    }

    if (valueRaw !== '' && valueRaw !== '|' && valueRaw !== '>') {
      parent[key] = coerceScalar(valueRaw);
      continue;
    }

    // Empty / multiline marker: look ahead for list vs nested map
    const next = nextSignificant(lines, i + 1);
    if (next && (next.trimmed.startsWith('- ') || next.trimmed === '-') && next.indent > indent) {
      const arr: unknown[] = [];
      parent[key] = arr;
      stack.push({ indent, container: arr });
      continue;
    }

    const child: Record<string, unknown> = {};
    parent[key] = child;
    stack.push({ indent, container: child });
  }

  return root;
}

function nextSignificant(
  lines: string[],
  from: number,
): { indent: number; trimmed: string } | null {
  for (let i = from; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    return {
      indent: line.match(/^ */)?.[0].length ?? 0,
      trimmed: line.trim(),
    };
  }
  return null;
}

function parseInlineList(raw: string): unknown[] {
  const inner = raw.slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(',').map((s) => coerceScalar(s.trim()));
}

function parseValue(raw: string): unknown {
  if (raw.startsWith('[') && raw.endsWith(']')) return parseInlineList(raw);
  return coerceScalar(raw);
}

function coerceScalar(raw: string): unknown {
  const v = stripQuotes(raw.trim());
  if (v === '') return '';
  if (v === 'null' || v === '~') return null;
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^-?\d+$/.test(v)) return Number(v);
  if (/^-?\d+\.\d+$/.test(v)) return Number(v);
  return v;
}

function stripQuotes(v: string): string {
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    return v.slice(1, -1);
  }
  return v;
}
