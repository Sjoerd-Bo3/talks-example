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
    <div class="slidev-layout two-columns h-full" :class="props.class">
      <div class="grid grid-cols-5 gap-8 h-full" :class="props.layoutClass">
        <div class="col-left col-span-3">
          <slot />
        </div>
        <div class="col-right col-span-2">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>
