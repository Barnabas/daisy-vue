<script setup lang="ts">
import Button, { type ButtonColor, type ButtonSize, type ButtonKind } from '@/components/Button.vue'

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
  <section>
    <h1>Button</h1>

    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Colors:</h3>
      <Button v-for="color in BUTTON_COLORS" :color>{{ color }}</Button>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Kinds:</h3>
      <Button v-for="type in BUTTON_KINDS" :type>{{ type }}</Button>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Sizes:</h3>
      <Button v-for="size in BUTTON_SIZES" :size>{{ size }}</Button>
    </div>
  </section>
</template>
