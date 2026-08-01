const URL = `https://raw.githubusercontent.com/flix/textmate/refs/heads/master/syntaxes/flix.tmLanguage.json`;
const DEST = 'src/grammars/flix.tmLanguage.json';

import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

async function fetchGrammar() {
  if (existsSync(DEST)) {
    console.log(`${DEST} already exists, skipping fetch`);
    return;
  }

  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${URL}: ${res.status} ${res.statusText}`);
  }

  await mkdir(dirname(DEST), { recursive: true });

  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(DEST, buf);
  console.log(`Wrote ${DEST}`);
}

fetchGrammar();