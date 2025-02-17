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
    <div class="slidev-layout two-columns" :class="props.class">
      <div class="grid grid-cols-2 gap-8" :class="props.layoutClass">
        <div class="col-left">
          <slot />
        </div>
        <div class="col-right">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>
