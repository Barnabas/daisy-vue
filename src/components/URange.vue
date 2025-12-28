<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type RangeColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'

export type RangeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type RangeProps = {
  min?: number
  max?: number
  step?: number
  color?: RangeColor
  size?: RangeSize
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<RangeProps>(), {
  min: 0,
  max: 100,
})
const attrs = useAttrs()

const model = defineModel<number>()

const COLOR_CLASSES: Record<RangeColor, string> = {
  neutral: 'range-neutral',
  primary: 'range-primary',
  secondary: 'range-secondary',
  accent: 'range-accent',
  success: 'range-success',
  warning: 'range-warning',
  info: 'range-info',
  error: 'range-error',
}

const SIZE_CLASSES: Record<RangeSize, string> = {
  xs: 'range-xs',
  sm: 'range-sm',
  md: 'range-md',
  lg: 'range-lg',
  xl: 'range-xl',
}

const classNames = computed(() => [
  'range',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
])
</script>

<template>
  <input
    type="range"
    v-model.number="model"
    :min="min"
    :max="max"
    :step="step"
    :class="classNames"
    v-bind="attrs"
  />
</template>
