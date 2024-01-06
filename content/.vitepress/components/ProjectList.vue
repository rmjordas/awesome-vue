<template>
  <ul>
    <li v-for="item in items" :key="item.url">
      <a :href="item.url">{{ item.name }}</a>
      <div>
        <code>
          gh:
          <template v-if="item.github">{{ item.github.stars }} stars</template>
          <template v-else>no data</template>
        </code>,
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
import {PropType} from "vue"
import {RichItem} from "../types";

defineProps({
  items: {type: Array as PropType<RichItem[]>, required: true},
})
</script>
