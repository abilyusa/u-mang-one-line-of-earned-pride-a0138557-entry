// One Line of Earned Pride — entry program.
//
// Writes a single line of text (1-240 characters) to entry.txt in the
// output directory the grader provides ($MAKEFUN_OUTPUT_DIR, falling back
// to /output). The line is a quiet, earned moment of pride: a grandfather
// who has let his grandson win at chess for six years realises, tonight,
// that the boy has genuinely beaten him.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Grandpa had let him win for six years; tonight the boy took his queen in four moves, and Grandpa laughed — for the first time, he hadn't let him.";

// Gate (from RULES.txt): entry.txt must be UTF-8 text of 1 to 240
// characters, a single line, and not only white space. Fail loudly
// instead of writing an entry the sealed scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`line is ${LINE.length} characters, outside the 1-240 gate`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE + "\n", "utf8");
