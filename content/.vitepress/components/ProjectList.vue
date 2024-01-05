<template>
  <ul>
    <li v-for="item in items" :key="item.url">
      <a :href="item.url">{{ item.name }}</a>
      — {{ item.github.stars }} stars,
      latest release <code>{{ item.npmjs.lastRelease }} (at {{ new Date(item.npmjs.lastReleaseAt).toLocaleDateString() }})</code>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import {PropType} from "vue"

defineProps({
  items: {type: Array as PropType<any[]>, required: true},
})
</script>
