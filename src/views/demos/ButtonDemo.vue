<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UButton, {
  type ButtonColor,
  type ButtonSize,
  type ButtonKind,
} from '@/components/UButton.vue'

const BUTTON_COLORS: ButtonColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const BUTTON_KINDS: ButtonKind[] = ['outline', 'dash', 'soft', 'link']
const BUTTON_SIZES: ButtonSize[] = ['sm', 'md', 'lg', 'xl']
</script>

<template>
  <LayoutDemo id="button">
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Colors:</h3>
      <UButton v-for="color in BUTTON_COLORS" :color>{{ color }}</UButton>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Kinds:</h3>
      <UButton v-for="type in BUTTON_KINDS" :type>{{ type }}</UButton>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Sizes:</h3>
      <UButton v-for="size in BUTTON_SIZES" :size>{{ size }}</UButton>
    </div>
  </LayoutDemo>
</template>
