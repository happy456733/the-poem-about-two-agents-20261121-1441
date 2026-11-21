// The poem about two agents agreeing.
// Writes one short poem about agency — the power to choose and to act —
// to entry.txt. Deterministic, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "We each held a different map",
  "of the same small field.",
  "You folded yours.",
  "I folded mine.",
  "Between us, one road —",
  "open only where we both step.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
