<script setup lang="ts">
import { themeClasses } from '../utils/themeClasses'

interface Feature {
  title: string
  description: string
}

defineProps<{
  cols?: number
  features: Feature[]
}>()

const colorMap = {
  0: 'green',
  1: 'blue',
  2: 'red',
  3: 'yellow',
}

// grid-cols-2
// grid-cols-3
// grid-cols-4
</script>

<template>
  <div class="grid gap-6" :class="cols ? `grid-cols-${cols}` : 'grid-cols-2'">
    <div v-for="(feature, index) in features" :key="index" v-click class="flex flex-col">
      <div class="flex-none text-[80px] font-black leading-none mb-3" :class="themeClasses(colorMap[index]).textLight">
        {{ index + 1 }}
      </div>
      <div>
        <h3 class="font-bold mb-1">
          {{ feature.title }}
        </h3>
        <p class="opacity-75 text-sm !mt-0">
          {{ feature.description }}
        </p>
      </div>
    </div>
  </div>
</template>
