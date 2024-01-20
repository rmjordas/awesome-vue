<template>
  <div class="badge">
    <span class="badge-label">{{ label }}</span>
    <span class="badge-value">{{ value }}</span>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>();
</script>
<style scoped>
.badge {
  display: inline-flex;
  font-size: 0.6rem;
  font-weight: 600;
  border: 1px solid var(--vp-c-divider);
  border-radius: .2rem;
}
.badge-label {
  border-right: 1px solid var(--vp-c-divider);
}
.badge-label, .badge-value {
  padding: 0 .3rem;
}
</style>
