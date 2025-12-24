<script setup lang="ts">
import { computed } from 'vue'

export type BadgeColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type BadgeVariant = 'soft' | 'outline' | 'dash' | 'ghost'

export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type BadgeProps = {
  color?: BadgeColor
  variant?: BadgeVariant
  size?: BadgeSize
}

const props = defineProps<BadgeProps>()

const COLOR_CLASSES: Record<BadgeColor, string> = {
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  soft: 'badge-soft',
  outline: 'badge-outline',
  dash: 'badge-dash',
  ghost: 'badge-ghost',
}

const SIZE_CLASSES: Record<BadgeSize, string> = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
  xl: 'badge-xl',
}

const classNames = computed(() => [
  'badge',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.variant ? VARIANT_CLASSES[props.variant] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
])
</script>

<template>
  <span :class="classNames">
    <slot />
  </span>
</template>
