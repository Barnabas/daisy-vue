<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import ULoading, {
  type LoadingType,
  type LoadingColor,
  type LoadingSize,
} from '@/components/ULoading.vue'

const LOADING_TYPES: LoadingType[] = ['spinner', 'dots', 'ring', 'ball', 'bars', 'infinity']

const LOADING_COLORS: LoadingColor[] = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
]

const LOADING_SIZES: LoadingSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
</script>

<template>
  <LayoutDemo id="loading">
    <div class="my-2 flex flex-wrap gap-4 items-center">
      <h3 class="w-24">Types:</h3>
      <div v-for="type in LOADING_TYPES" :key="type" class="flex flex-col items-center gap-2">
        <ULoading :type />
        <span class="text-xs">{{ type }}</span>
      </div>
    </div>
    <div class="my-2 flex flex-wrap gap-4 items-center">
      <h3 class="w-24">Colors:</h3>
      <div v-for="color in LOADING_COLORS" :key="color" class="flex flex-col items-center gap-2">
        <ULoading :color />
        <span class="text-xs">{{ color }}</span>
      </div>
    </div>
    <div class="my-2 flex flex-wrap gap-4 items-center">
      <h3 class="w-24">Sizes:</h3>
      <div v-for="size in LOADING_SIZES" :key="size" class="flex flex-col items-center gap-2">
        <ULoading :size color="primary" />
        <span class="text-xs">{{ size }}</span>
      </div>
    </div>
    <div class="my-2 flex flex-wrap gap-4 items-baseline">
      <h3 class="w-24">In text:</h3>
      <p>Loading <ULoading type="spinner" size="sm" color="primary" /> please wait...</p>
    </div>
  </LayoutDemo>
</template>
