<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
  gridClass: {
    type: String,
  },
})
</script>

<template>
  <div class="h-full">
    <div class="slidev-layout p-0 two-cols-header w-full h-full" :class="layoutClass">
      <div class="col-header">
        <slot />
      </div>
      <div class="grid grid-cols-2 gap-8 w-full" :class="gridClass">
        <div class="col-left">
          <slot name="left" />
        </div>
        <div class="col-right">
          <slot name="right" />
        </div>
      </div>
      <div class="col-bottom" :class="props.class">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
