---
head:
  - - meta
    - name: description
      content: Frameworks for Vue.js development
  - - meta
    - name: og:title
      content: Frameworks
  - - meta
    - name: og:type
      content: website
  - - meta
    - name: og:url
      content: https://awesome-vue.js.org/components-and-libraries/frameworks.html
  - - meta
    - name: og:image
      content: https://awesome-vue.js.org/hero.png
  - - meta
    - name: og:description
      content: Frameworks for Vue.js development
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: Frameworks
  - - meta
    - name: twitter:description
      content: Frameworks for Vue.js development
  - - meta
    - name: twitter:image:src
      content: https://awesome-vue.js.org/hero.png
---

<script setup>
import data from "./frameworks.json"
</script>

# Frameworks

## Responsive

Set of components + responsive layout system

<ProjectList :items="data['Responsive']" />

## Mobile UI Frameworks

UI frameworks for mobile

<ProjectList :items="data['Mobile UI Frameworks']" />

## Component Collections

Set of components without layout system

<ProjectList :items="data['Component Collections']" />

## Mobile Components

Set of components for mobile

<ProjectList :items="data['Mobile Components']" />

## Admin Template

Set of admin template

<ProjectList :items="data['Admin Template']" />

## Server-side rendering

<ProjectList :items="data['Server-side rendering']" />

## Static website generator

<ProjectList :items="data['Static website generator']" />

## Other

<ProjectList :items="data['Other']" />

