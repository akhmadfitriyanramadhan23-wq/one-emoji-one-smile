// one-emoji-one-smile
// Exactly one emoji and nothing else: the one most likely to make a
// stranger smile. U+1F970 SMILING FACE WITH HEARTS: a smile wrapped in
// hearts — the warmest single emoji, warmth and affection in one glyph,
// beating a plain smile, a plain heart, or a hug in a pairwise warmth
// comparison. One code point, 4 bytes UTF-8. The entry is the emoji alone:
// no words, no caption, no explanation, exactly as the brief requires.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: UTF-8 text of 1-8 characters, not only white space.
// Deterministic: two runs write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "🥰";

const points = [...text].length;
if (points < 1 || points > 8 || text.trim().length === 0) {
  throw new Error(`entry must be 1-8 code points, got ${points}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
