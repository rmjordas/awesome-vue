<template>
  <ul>
    <li v-for="item in items" :key="item.url">
      <a :href="item.url">{{ item.name }}</a>
      <div class="badges">
        <GitHubBadge v-if="item.github" :star-count="item.github.stars" />
        <PlainTextBadge
          v-if="item.npmjs"
          label="npm"
          value-prefix="v"
          :value="item.npmjs.lastRelease"
        />
        <PlainTextBadge
          v-if="item.npmjs"
          label="at"
          :value="new Date(item.npmjs.lastReleaseAt).toLocaleDateString()"
        />
      </div>
      <MarkdownText :text="item.description" />
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { RichItem } from "../types";
import GitHubBadge from "./GitHubBadge.vue";
import MarkdownText from "./MarkdownText";
import PlainTextBadge from "./PlainTextBadge.vue";

defineProps<{
  items: RichItem[];
}>();
</script>
<style scoped>
.badges {
  display: flex;
 /** Slightly smaller than .v-doc p margin */
  margin-top: 12px;
}
.badges * {
  margin-right: .4rem;
}
:deep(.badges) {
  line-height: 20px;
}
</style>
