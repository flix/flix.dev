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

Note: `dev` and `build` first run `npm run fetch-grammar`, which downloads the Flix [TextMate grammar](https://github.com/flix/textmate) used for syntax highlighting into `src/grammars/`. The download is skipped if the file already exists.

## Learn More

- [Astro documentation](https://docs.astro.build/)
- [Bootstrap 4 documentation](https://getbootstrap.com/docs/4.6/getting-started/introduction/) (used for styling)
