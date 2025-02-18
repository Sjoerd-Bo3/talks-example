<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
  color?: string
}

interface Props {
  features: Feature[]
  clicks?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="grid gap-4">
    <div
      v-for="(feature) in features"
      :key="feature.title"
      v-click="clicks"
      class="flex items-center gap-2"
    >
      <div
        :class="[feature.icon, `text-xl min-w-6 min-h-6 ${feature.color || 'text-white'}`]"
      />
      <div>
        <strong>{{ feature.title }}:</strong>
        {{ feature.description }}
      </div>
    </div>
  </div>
</template>
