<template>
  <ul>
    <li v-for="item in items" :key="item.url">
      <a :href="item.url">{{ item.name }}</a>
      <div class="badges">
        <GitHubBadge v-if="item.github" :star-count="item.github.stars" />
        <PlainTextBadge
          v-if="item.npmjs"
          label="npm"
          :value="`v${item.npmjs.lastRelease}`"
        />
        <PlainTextBadge
          v-if="item.npmjs"
          label="at"
          :value="new Date(item.npmjs.lastReleaseAt).toLocaleDateString()"
        />
      </div>
      <p>{{ item.description }}</p>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { RichItem } from "../types";
import GitHubBadge from "./GitHubBadge.vue";
import PlainTextBadge from "./PlainTextBadge.vue";

defineProps<{
  items: RichItem[];
}>();
</script>
<style scoped>
.badges {
  display: flex;
  margin-top: .3rem;
}
.badges * {
  margin-right: .4rem;
}
</style>
