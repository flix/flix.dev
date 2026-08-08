// Pinned to a specific commit of flix/textmate for reproducible builds. To pick
// up grammar changes, bump the SHA *and* delete the file below: the fetch is
// skipped whenever it already exists, so on a working tree that has built once
// the new SHA alone changes nothing.
const COMMIT = 'befa883ecec4b0c84e436bdd176dec5475e584ab';
const URL = `https://raw.githubusercontent.com/flix/textmate/${COMMIT}/syntaxes/flix.tmLanguage.json`;
const DEST = 'src/grammars/flix.tmLanguage.json';

import { fetchOnce } from './fetchOnce.mjs';

await fetchOnce({ url: URL, dest: DEST });
