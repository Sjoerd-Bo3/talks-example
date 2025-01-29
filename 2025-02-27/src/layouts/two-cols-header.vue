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
  <div class="p-10 h-full">
    <div class="h-[500px]">
      <div class="slidev-layout p-0 two-cols-header w-full h-full" :class="layoutClass">
        <div class="col-header">
          <slot />
        </div>
        <div class="grid grid-cols-2 gap-4">
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
  </div>
</template>
