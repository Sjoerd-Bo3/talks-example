<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout bullets" :class="props.class">
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>

<style>
.bullets {
  @apply px-14 py-10;
}

.bullets h1 {
  @apply text-4xl font-bold mb-8;
}

.bullets ul {
  @apply space-y-4 list-none pl-0;
}

.bullets li {
  @apply text-xl leading-relaxed opacity-90;
}

.bullets li strong {
  @apply text-white opacity-100;
}

.bullets p {
  @apply text-xl leading-relaxed opacity-90;
}
</style> 