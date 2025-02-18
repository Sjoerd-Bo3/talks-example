<script setup lang="ts">
interface ListItem {
  icon: string
  label: string
}

interface Props {
  items: ListItem[]
  columns?: 1 | 2
}

withDefaults(defineProps<Props>(), {
  columns: 2,
})
</script>

<template>
  <div :class="`grid grid-cols-${columns} gap-2 text-sm opacity-75`">
    <div v-for="item in items" :key="item.label" class="flex items-center gap-2">
      <div :class="item.icon" />
      {{ item.label }}
    </div>
    <div v-if="$slots.more" class="flex items-center gap-2 opacity-50">
      <slot name="more">
        and more...
      </slot>
    </div>
  </div>
</template>
