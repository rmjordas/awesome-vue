---
head:
  - - meta
    - name: description
      content: Integrate Vue.js applications with services or other frameworks
  - - meta
    - name: og:title
      content: Integrations
  - - meta
    - name: og:type
      content: website
  - - meta
    - name: og:url
      content: https://awesome-vue.js.org/components-and-libraries/integrations.html
  - - meta
    - name: og:image
      content: https://awesome-vue.js.org/hero.png
  - - meta
    - name: og:description
      content: Integrate Vue.js applications with services or other frameworks
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: Integrations
  - - meta
    - name: twitter:description
      content: Integrate Vue.js applications with services or other frameworks
  - - meta
    - name: twitter:image:src
      content: https://awesome-vue.js.org/hero.png
---

<script setup>
import data from "./integrations.json"
</script>

# Integrations

Integrate with services or other frameworks

<ProjectList :items="data['Integrations']" />

## Vue CLI Plugins

<ProjectList :items="data['Vue CLI Plugins']" />

