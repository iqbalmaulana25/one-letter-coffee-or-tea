// One Letter: Coffee or Tea
// Writes exactly one letter to /output/entry.txt: "A" for coffee.
// The gate accepts exactly 1 character, so no trailing newline is written.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "A"; // A = coffee

// Gate guard: the file must hold exactly this one character and nothing
// else — no newline, no spaces — or the entry is invalid.
if (!/^[AB]$/.test(letter)) {
  throw new Error(`entry must be exactly one letter, A or B: ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
console.log(letter);
