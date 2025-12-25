<script setup lang="ts">
import { computed } from 'vue'

export type LoadingType = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'

export type LoadingColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
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

const props = withDefaults(defineProps<LoadingProps>(), {
  type: 'spinner',
})

const TYPE_CLASSES: Record<LoadingType, string> = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
}

const COLOR_CLASSES: Record<LoadingColor, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  neutral: 'text-neutral',
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
  TYPE_CLASSES[props.type],
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
])
</script>

<template>
  <span :class="classNames"></span>
</template>
