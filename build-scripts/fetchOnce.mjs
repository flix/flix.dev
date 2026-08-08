// Shared by fetchGrammar.mjs and fetchBlogPosts.mjs. Both pull one file from a
// remote into src/ before Astro runs and then leave it alone, so the rest of the
// build is a pure function of the working tree and never touches the network.
//
// Fetching here rather than from a page means a failure stops the build with a
// non-zero exit instead of quietly rendering a page that is missing something.

import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

/**
 * Download `url` to `dest`, unless `dest` is already there.
 *
 * @param {object} options
 * @param {string} options.url
 * @param {string} options.dest Path relative to the repository root.
 * @param {(body: string) => string | undefined} [options.validate]
 *   Inspects the body and returns what is wrong with it, or undefined if it is
 *   what was expected. A server that signals "not found" with something other
 *   than a 4xx needs this; the status alone cannot be trusted.
 */
export async function fetchOnce({ url, dest, validate }) {
  if (existsSync(dest)) {
    console.log(`${dest} already exists, skipping fetch`);
    return;
  }

  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    // Offline, DNS, TLS: the message is the only thing that separates them, and
    // bare "fetch failed" without the URL is not enough to act on in a CI log.
    throw new Error(`Failed to fetch ${url}: ${err instanceof Error ? err.message : err}`);
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }

  // arrayBuffer rather than text so this stays honest for binary payloads; the
  // validator gets a decoded copy, and only text is ever validated.
  const body = Buffer.from(await res.arrayBuffer());

  const problem = validate?.(body.toString('utf8'));
  if (problem) throw new Error(`Fetched ${url}, but ${problem}`);

  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, body);
  console.log(`Wrote ${dest}`);
}
