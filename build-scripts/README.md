# Build Scripts

Each script downloads one file from elsewhere into `src/` before Astro runs, so
the build itself never touches the network.

| Script | Downloads | Into |
| --- | --- | --- |
| `fetchGrammar.mjs` | Flix [TextMate grammar](https://github.com/flix/textmate), pinned to a commit | `src/grammars/flix.tmLanguage.json` |
| `fetchBlogPosts.mjs` | Atom feed of [blog.flix.dev](https://blog.flix.dev/) | `src/data/blog-atom.xml` |

Both go through `fetchOnce.mjs`, which **skips the download whenever the file is
already there**. Nothing expires it: each file is retrieved once and then kept
forever. To refresh one, delete it and fetch again.

```sh
rm src/grammars/flix.tmLanguage.json && npm run fetch-grammar
rm src/data/blog-atom.xml && npm run fetch-blog-posts
```

This is why bumping `COMMIT` in `fetchGrammar.mjs` does nothing on its own — a
working tree that has already built keeps the old grammar until it is deleted.

The downloads are gitignored, so a fresh clone and every CI run fetch them again.
A download that fails, or that returns something other than what was expected,
stops the build with a non-zero exit rather than quietly publishing a page that
is missing part of its content.
