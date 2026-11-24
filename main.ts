import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "★☆☆☆☆ Serves breakfast at seven despite six written complaints, each carefully deposited in the shoe he wears to work.";
if (!entry.trim() || /[\r\n]/.test(entry) || [...entry].length > 200) {
  throw new Error('Expected one line of at most 200 characters');
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
