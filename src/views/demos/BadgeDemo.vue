<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import BaseBadge, {
  type BadgeColor,
  type BadgeVariant,
  type BadgeSize,
} from '@/components/BaseBadge.vue'

const BADGE_COLORS: BadgeColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const BADGE_VARIANTS: BadgeVariant[] = ['soft', 'outline', 'dash', 'ghost']
const BADGE_SIZES: BadgeSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
</script>

<template>
  <LayoutDemo id="badge">
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Colors:</h3>
      <BaseBadge v-for="color in BADGE_COLORS" :color>{{ color }}</BaseBadge>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Variants:</h3>
      <BaseBadge v-for="variant in BADGE_VARIANTS" :variant>{{ variant }}</BaseBadge>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Sizes:</h3>
      <BaseBadge v-for="size in BADGE_SIZES" :size>{{ size }}</BaseBadge>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Empty:</h3>
      <BaseBadge v-for="size in BADGE_SIZES" :size color="primary"></BaseBadge>
    </div>
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">In text:</h3>
      <p>This is a paragraph with a <BaseBadge color="primary">badge</BaseBadge> inside it.</p>
    </div>
  </LayoutDemo>
</template>
