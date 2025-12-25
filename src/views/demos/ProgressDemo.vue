<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UProgress, { type ProgressColor } from '@/components/UProgress.vue'

const PROGRESS_COLORS: ProgressColor[] = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
]

const PROGRESS_VALUES = [0, 25, 50, 75, 100]
</script>

<template>
  <LayoutDemo id="progress">
    <div class="my-2 flex items-center gap-4">
      <span class="w-24 text-sm">Default</span>
      <UProgress :value="50" class="w-56" />
    </div>
    <div class="my-2 flex items-center gap-4">
      <span class="w-24 text-sm">Indeterminate</span>
      <UProgress color="primary" class="w-56" />
    </div>
    <div v-for="color in PROGRESS_COLORS" :key="color" class="my-2 flex items-center gap-4">
      <span class="w-24 text-sm">{{ color }}</span>
      <UProgress :value="60" :color class="w-56" />
    </div>
    <div v-for="value in PROGRESS_VALUES" :key="value" class="my-2 flex items-center gap-4">
      <span class="w-24 text-sm">{{ value }}%</span>
      <UProgress :value color="primary" class="w-56" />
    </div>
  </LayoutDemo>
</template>
