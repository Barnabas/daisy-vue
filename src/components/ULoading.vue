<script setup lang="ts">
import { computed } from 'vue'

export type LoadingType = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'

export type LoadingColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type LoadingProps = {
  type?: LoadingType
  color?: LoadingColor
  size?: LoadingSize
}

const { type = 'spinner', color, size } = defineProps<LoadingProps>()

const TYPE_CLASSES: Record<LoadingType, string> = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
}

const COLOR_CLASSES: Record<LoadingColor, string> = {
  neutral: 'text-neutral',
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}

const SIZE_CLASSES: Record<LoadingSize, string> = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
  xl: 'loading-xl',
}

const classNames = computed(() => [
  'loading',
  TYPE_CLASSES[type],
  color ? COLOR_CLASSES[color] : '',
  size ? SIZE_CLASSES[size] : '',
])
</script>

<template>
  <span :class="classNames" role="status" aria-label="Loading"></span>
</template>
