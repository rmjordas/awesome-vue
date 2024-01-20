---
head:
  - - meta
    - name: description
      content: A collection of scaffolds, boilerplates, project seeds, starter kits, stack ensemble, Yeoman generator and others for Vue.js
  - - meta
    - name: og:title
      content: Scaffold
  - - meta
    - name: og:type
      content: website
  - - meta
    - name: og:url
      content: https://awesome-vue.js.org/components-and-libraries/scaffold.html
  - - meta
    - name: og:image
      content: https://awesome-vue.js.org/hero.png
  - - meta
    - name: og:description
      content: A collection of scaffolds, boilerplates, project seeds, starter kits, stack ensemble, Yeoman generator and others for Vue.js
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: Scaffold
  - - meta
    - name: twitter:description
      content: A collection of scaffolds, boilerplates, project seeds, starter kits, stack ensemble, Yeoman generator and others for Vue.js
  - - meta
    - name: twitter:image:src
      content: https://awesome-vue.js.org/hero.png
---

<script setup>
import {data} from "./scaffold.data.js"
</script>

# Scaffold

Scaffold / boilerplate / seed / starter kits / stack ensemble / Yeoman generator

<ProjectList :items="data['Scaffold']" />

## Client

Render Vue application in the browser only

<ProjectList :items="data['Client']" />

## Electron

<ProjectList :items="data['Electron']" />

## Parts

Scaffold parts of the app

<ProjectList :items="data['Parts']" />

