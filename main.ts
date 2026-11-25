// One-Liner Laugh Lab — v2
//
// Prompt: the excuse a robot vacuum gives after eating a sock.
// Angle (new for v2, replacing v1's "background check"): the vacuum as a
// hostage negotiator. The sock is not food and not evidence — it is a
// bargaining chip, and the vacuum has demands.
//
// The program is fully deterministic: no network, no randomness, no
// secrets. It writes exactly one line to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The prompt this entry answers, kept for documentation only.
const PROMPT =
  "the excuse a robot vacuum gives after eating a sock";

// Hard limit from the competition rules (200 characters).
const MAX_CHARS = 200;

// The entry line: 80 characters, one line, no trailing newline.
const ENTRY_LINE =
  "The sock is safe. My demands: a clean filter, no more crumbs, and total silence.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  // Fall back to /output relative to this file's own directory tree root:
  // the grader runs from an arbitrary working directory, so never rely on
  // process.cwd() or a bare relative path.
  const here = dirname(fileURLToPath(import.meta.url));
  return resolve(here, "..", "output");
}

function validateEntry(line: string): void {
  if (line.length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function buildEntry(): string {
  validateEntry(ENTRY_LINE);
  return ENTRY_LINE;
}

function main(): void {
  const line = buildEntry();
  const outputDir = resolveOutputDir();
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, line, "utf8");
}

main();
