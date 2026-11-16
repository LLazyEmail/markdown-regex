import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import * as frontmatter from "../src/frontmatter";
import * as blocks from "../src/blocks";
import * as email from "../src/email";
import * as cleanup from "../src/cleanup";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const llmsFull = readFileSync(path.join(root, "llms-full.txt"), "utf8");
const llms = readFileSync(path.join(root, "llms.txt"), "utf8");
const skill = readFileSync(path.join(root, "SKILL.md"), "utf8");

/**
 * Agent-facing docs (llms.txt, llms-full.txt, SKILL.md) ship in the npm
 * tarball. Keep every runtime export of each subpath documented there so
 * AI agents do not miss or invent APIs.
 */
describe("agent docs cover subpath exports", () => {
  const subpaths = {
    "markdown-regex/frontmatter": frontmatter,
    "markdown-regex/blocks": blocks,
    "markdown-regex/email": email,
    "markdown-regex/cleanup": cleanup,
  };

  for (const [subpath, mod] of Object.entries(subpaths)) {
    it(`llms-full.txt documents ${subpath}`, () => {
      expect(llmsFull).toContain(subpath);
      for (const name of Object.keys(mod)) {
        expect(llmsFull, `${subpath} export ${name}`).toContain(name);
      }
    });

    it(`llms.txt mentions ${subpath}`, () => {
      expect(llms).toContain(subpath);
    });
  }

  it("documents every CLI mode in llms-full.txt and SKILL.md", () => {
    for (const mode of ["links", "headers", "images", "extract"]) {
      expect(llmsFull).toContain(`npx markdown-regex ${mode}`);
    }
    expect(skill).toContain("npx markdown-regex");
  });
});
