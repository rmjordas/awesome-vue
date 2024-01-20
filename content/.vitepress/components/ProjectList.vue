<template>
  <ul>
    <li v-for="item in items" :key="item.url">
      <a :href="item.url">{{ item.name }}</a>
      <div>
        <GitHubBadge v-if="item.github" :star-count="item.github.stars" />
        <code>
          npm:
          <template v-if="item.npmjs">
            release {{ item.npmjs.lastRelease }} (at {{ new Date(item.npmjs.lastReleaseAt).toLocaleDateString() }})
          </template>
          <template v-else>
            no data
          </template>
        </code>
      </div>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import {RichItem} from "../types"
import GitHubBadge from "./GitHubBadge.vue";

defineProps<{
  items: RichItem[],
}>()
</script>
