# The Flix Website (flix.dev)

The website of the [Flix programming language](https://flix.dev/), built with [Astro](https://astro.build/).

## Development

Requires [Node.js](https://nodejs.org/) 22 or later.

```sh
npm install
npm run dev
```

The development server runs at [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Building

```sh
npm run build
```

Builds the production site to the `dist/` folder.

```sh
npm run preview
```

Previews the production build locally before deploying. See the Astro [deployment guide](https://docs.astro.build/en/guides/deploy/) for more information.

## External Resources

`dev`, `build`, and `check` first run `npm run fetch`, which downloads two files into `src/`:

- the Flix [TextMate grammar](https://github.com/flix/textmate) used for syntax highlighting, into `src/grammars/`
- the Atom feed of [blog.flix.dev](https://blog.flix.dev/), which the blog page lists posts from, into `src/data/`

Each download is skipped if the file is already there, so both are retrieved once and then kept. To update them, delete them and fetch again:

```sh
rm -f src/grammars/flix.tmLanguage.json src/data/blog-atom.xml
npm run fetch
```

Either can also be fetched on its own with `npm run fetch-grammar` or `npm run fetch-blog-posts`. See [`build-scripts/`](build-scripts/README.md) for details.

## Learn More

- [Astro documentation](https://docs.astro.build/)
- [Bootstrap 5 documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) (used for styling)
