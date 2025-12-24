<script setup lang="ts">
import { computed } from 'vue'

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type CardBorder = 'border' | 'dash'

const SIZE_CLASSES: Record<CardSize, string> = {
  xs: 'card-xs',
  sm: 'card-sm',
  md: 'card-md',
  lg: 'card-lg',
  xl: 'card-xl',
}

const BORDER_CLASSES: Record<CardBorder, string> = {
  border: 'card-border',
  dash: 'card-dash',
}

type CardProps = {
  size?: CardSize
  border?: CardBorder
  side?: boolean
  imageFull?: boolean
}

const props = defineProps<CardProps>()

const classNames = computed(() => [
  'card',
  'bg-base-100',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.border ? BORDER_CLASSES[props.border] : '',
  props.side ? 'card-side' : '',
  props.imageFull ? 'image-full' : '',
])
</script>

<template>
  <div :class="classNames">
    <slot name="figure" />
    <div class="card-body">
      <h2 v-if="$slots.title" class="card-title">
        <slot name="title" />
      </h2>
      <slot />
      <div v-if="$slots.actions" class="card-actions justify-end">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
