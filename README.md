<!-- markdownlint-disable MD033 MD041 MD002 -->
<h1 align="center">

<br>

<img src=".github/hero.png" alt="Awesome Vue.js" width="640">

<br>
<br>

Awesome Vue.js

</h1>

<h3 align="center">A curated list of awesome things related to Vue.js</h3>

<p align="center">
  <a href="https://github.com/rmjordas/awesome-vue/actions?query=workflow%3A%22GitHub%20Pages%22">
    <img src="https://github.com/rmjordas/awesome-vue/workflows/GitHub%20Pages/badge.svg?branch=master&event=push" alt="Deploy to GitHub Pages build status badge">
  </a>

  <a href="https://awesome-vue.js.org">
    <img src="https://img.shields.io/badge/website-https://awesome--vue.js.org-blue.svg" alt="Awesome Vue.js website">
  </a>
</p>

<hr />
<!-- markdownlint-enable MD033 -->

This project does not aim to replace the **[official Vue.js Awesome List][vuejs/awesome-vue]** but rather to provide a nicer experience when browsing the content.

[vuejs/awesome-vue]: https://github.com/vuejs/awesome-vue

## Instructions

To run this application on your machine, first clone the repository and install the required dependencies:

```bash
git clone https://github.com/rmjordas/awesome-vue.git
cd awesome-vue
npm install
```

Run the `dev` script to compile the content and spawn a local server to serve the compiled code. While this script is running, any changes made to the markdown files will automatically be updated on the locally served pages.

```bash
npm run dev
```

To prepare the application for deployment, first run `npm run build` to compile the application in production mode. This will generate a directory in `content/.vuepress` called **`dist`**.

```bash
npm run build
# You can use `serve` to inspect the output
npm install -g serve
serve content/.vuepress/dist
```

## Scripts

| Script  | Description                                             |
|---------|---------------------------------------------------------|
| `dev`   | Compiles content and serves bundled code                |
| `build` | Compiles content and other static assets for deployment |
| `lint`  | Runs markdown linter to check lint errors               |
| `test`  | An alias for `lint` (runs `lint` script)                 |

## Contributing

Please refer to the [Contributing Guide](.github/CONTRIBUTING.md).

## License

This is free and unencumbered software released into the public domain.

For more information, please refer to <https://unlicense.org>
