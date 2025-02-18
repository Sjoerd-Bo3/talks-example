<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  url: string
  scale?: number
  noClick?: boolean
}>()

const scaleInvertPercent = computed(() => `${(1 / (props.scale || 1)) * 100}%`)
</script>

<template>
  <div class="slidev-layout flex items-center">
    <div class="grid grid-cols-2 gap-8 w-full h-full">
      <div v-bind="$attrs">
        <slot />
      </div>
      <div relative :style="{ width: scaleInvertPercent, height: scaleInvertPercent }">
        <v-click>
          <iframe
            id="frame" class="w-full h-full rounded-lg"
            :src="url"
            :style="scale ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : {}"
          />
        </v-click>
      </div>
    </div>
  </div>
</template>
