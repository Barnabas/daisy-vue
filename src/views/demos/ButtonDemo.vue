<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import BaseButton, {
  type ButtonColor,
  type ButtonSize,
  type ButtonKind,
} from '@/components/BaseButton.vue'

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
      <BaseButton v-for="color in BUTTON_COLORS" :color>{{ color }}</BaseButton>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Kinds:</h3>
      <BaseButton v-for="type in BUTTON_KINDS" :type>{{ type }}</BaseButton>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Sizes:</h3>
      <BaseButton v-for="size in BUTTON_SIZES" :size>{{ size }}</BaseButton>
    </div>
  </LayoutDemo>
</template>
