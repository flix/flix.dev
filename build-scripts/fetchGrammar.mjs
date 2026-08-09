// Pinned to a specific commit of flix/textmate for reproducible builds. To pick
// up grammar changes, bump the SHA *and* delete the file below: the fetch is
// skipped whenever it already exists, so on a working tree that has built once
// the new SHA alone changes nothing.
const COMMIT = '1da5462a560b45eb7d8dbb25955fbf31606f90bd';
const URL = `https://raw.githubusercontent.com/flix/textmate/${COMMIT}/syntaxes/flix.tmLanguage.json`;
const DEST = 'src/grammars/flix.tmLanguage.json';

import { fetchOnce } from './fetchOnce.mjs';

await fetchOnce({ url: URL, dest: DEST });
