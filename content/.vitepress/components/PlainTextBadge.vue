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
  font-size: 0.7rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 1px 1px .2rem rgba(0, 0, 0, .2);
  --border-radius: .2rem;
}
.badge-label {
  background-color: #5c5c5c;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}
.badge-value {
  background-color: #0f80c1;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}
.badge-label, .badge-value {
  padding: 0 .3rem;
}
</style>
