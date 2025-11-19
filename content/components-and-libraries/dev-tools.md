---
head:
  - - meta
    - name: description
      content: Tools for Vue.js development
  - - meta
    - name: og:title
      content: Developer Tools
  - - meta
    - name: og:type
      content: website
  - - meta
    - name: og:url
      content: https://awesome-vue.js.org/components-and-libraries/dev-tools.html
  - - meta
    - name: og:image
      content: https://awesome-vue.js.org/hero.png
  - - meta
    - name: og:description
      content: Tools for Vue.js development
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: Developer Tools
  - - meta
    - name: twitter:description
      content: Tools for Vue.js development
  - - meta
    - name: twitter:image:src
      content: https://awesome-vue.js.org/hero.png
---

<script setup>
import data from "./dev-tools.json"
</script>

# Developer Tools

<ProjectList :items="data['Developer Tools']" />

## Inspect

Inspecting & debugging

<ProjectList :items="data['Inspect']" />

## Docs

Create documentation

<ProjectList :items="data['Docs']" />

## Test

<ProjectList :items="data['Test']" />

## Source Code Editing

Text editor plugins

### Sublime Text

<ProjectList :items="data['Sublime Text']" />

### Vim

<ProjectList :items="data['Vim']" />

### Visual Studio Code

<ProjectList :items="data['Visual Studio Code']" />

### Intellij

- [Vue.js support for WebStorm](https://github.com/JetBrains/intellij-plugins/tree/master/vuejs), IntelliJ IDEA, PhpStorm, PyCharm & RubyMine – official Vue.js support by JetBrains

### Emacs

<ProjectList :items="data['Emacs']" />

### Kate

<ProjectList :items="data['Kate']" />

