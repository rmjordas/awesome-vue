# Awesome Vue.js [![Build Status][badge]][ci]

[badge]: https://travis-ci.com/rmjordas/awesome-vue.svg?branch=master
[ci]: https://travis-ci.com/rmjordas/awesome-vue

A curated list of awesome things related to Vue.js

## Instructions

To run this application on your machine, first clone the repository and install
the required dependencies:

```bash
git clone https://github.com/rmjordas/awesome-vue.git
cd awesome-vue
npm install
```

Run the `dev` script to compile the content and spawn a local server to serve
the compiled code. While this script is running, any changes made to the
markdown files will automatically be updated on the locally served pages.

```bash
npm run dev
```

To prepare the application for deployment, first run `npm run build` to compile
the application in production mode. This will generate a directory in
`content/.vupress` called `dist`.

```bash
npm install -g serve
npm run build
cd content/.vupress/dist
serve .
```

## Scripts

| Script  | Description                                             |
|---------|---------------------------------------------------------|
| `dev`   | Compiles content and serves bundled code                |
| `build` | Compiles content and other static assets for deployment |
| `lint`  | Runs markdown linter to check lint errors               |
| `test`  | Runs `lint` script                                      |

## Contributing

Please refer to the [Contributing Guide](.github/CONTRIBUTING.md) if you want to
add new entries.

## License

This is free and unencumbered software released into the public domain.

For more information, please refer to <http://unlicense.org>
