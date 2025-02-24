<script setup lang="ts">
import { computed } from 'vue'
import { themeClasses } from '../utils/themeClasses'

interface Props {
  color?: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo' | 'orange'
  icon?: string
  title?: string
  subtitle?: string
  center?: boolean
  iconCenter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  center: false,
})

const alignmentClass = computed(() => props.center ? 'items-center' : 'items-start')
</script>

<template>
  <div
    class="p-4 border rounded-lg flex flex-col"
    :class="[themeClasses(props.color).card, alignmentClass]"
  >
    <div class="flex items-center gap-2" :class="{ 'justify-center flex-col items-center': iconCenter }">
      <slot name="icon">
        <div v-if="icon" class="text-2xl" :class="[icon]" />
      </slot>
      <div class="font-bold flex items-center gap-2">
        {{ title }}
      </div>
    </div>
    <div v-if="subtitle" class="opacity-75 text-sm">
      {{ subtitle }}
    </div>
    <div v-if="$slots.default" class="mt-2 w-full relative">
      <slot />
    </div>
  </div>
</template>
