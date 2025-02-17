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
  <div>
    <div class="slidev-layout relative h-full" :class="props.class">
      <slot />
    </div>
  </div>
</template>
