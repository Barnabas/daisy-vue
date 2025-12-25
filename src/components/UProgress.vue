<script setup lang="ts">
import { computed } from 'vue'

export type ProgressColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

type ProgressProps = {
  value?: number
  max?: number
  color?: ProgressColor
}

const props = withDefaults(defineProps<ProgressProps>(), {
  max: 100,
})

const COLOR_CLASSES: Record<ProgressColor, string> = {
  primary: 'progress-primary',
  secondary: 'progress-secondary',
  accent: 'progress-accent',
  neutral: 'progress-neutral',
  info: 'progress-info',
  success: 'progress-success',
  warning: 'progress-warning',
  error: 'progress-error',
}

const classNames = computed(() => [
  'progress',
  props.color ? COLOR_CLASSES[props.color] : '',
])
</script>

<template>
  <progress :class="classNames" :value="value" :max="max"></progress>
</template>
