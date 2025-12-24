<script setup lang="ts">
import { computed } from 'vue'

export type ButtonColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type ButtonKind = 'outline' | 'dash' | 'soft' | 'link'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonShape = 'square' | 'circle' | 'wide' | 'block'

type ButtonProps = {
  color?: ButtonColor
  type?: ButtonKind
  size?: ButtonSize
  shape?: ButtonShape
}

const props = defineProps<ButtonProps>()

const COLOR_CLASSES: Record<ButtonColor, string> = {
  neutral: 'btn-neutral',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
}

const TYPE_CLASSES: Record<ButtonKind, string> = {
  outline: 'btn-outline',
  dash: 'btn-dash',
  soft: 'btn-soft',
  link: 'btn-link',
}

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
}

const SHAPE_CLASSES: Record<ButtonShape, string> = {
  square: 'btn-square',
  circle: 'btn-circle',
  wide: 'btn-wide',
  block: 'btn-block',
}

const classNames = computed(() => [
  'btn',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.type ? TYPE_CLASSES[props.type] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.shape ? SHAPE_CLASSES[props.shape] : '',
])
</script>

<template>
  <button :class="classNames">
    <slot />
  </button>
</template>
