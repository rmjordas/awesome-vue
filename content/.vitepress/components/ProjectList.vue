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
          label="Last published"
          :value="getRelativeTime(new Date(item.npmjs.lastReleaseAt))"
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

/**
 * Get relative time
 * https://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time
 */
const getRelativeTime = (d1: Date, d2 = new Date()) => {
  const elapsed = d1.getTime() - d2.getTime()

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (var u in units)  {
    if (Math.abs(elapsed) > units[u] || u == 'second') {
      try {
        return rtf.format(Math.round(elapsed/units[u]), u as Intl.RelativeTimeFormatUnit)
      } catch {
        // pass
      }
    }
  }
  return d1.toLocaleDateString()
}
// in miliseconds
const units = {
  year  : 24 * 60 * 60 * 1000 * 365,
  month : 24 * 60 * 60 * 1000 * 365/12,
  day   : 24 * 60 * 60 * 1000,
  hour  : 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
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
