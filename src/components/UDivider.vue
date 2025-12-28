<script setup lang="ts">
import { computed } from 'vue'

export type DividerColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'

export type DividerDirection = 'horizontal' | 'vertical'

export type DividerPlacement = 'start' | 'end'

type DividerProps = {
  color?: DividerColor
  direction?: DividerDirection
  placement?: DividerPlacement
}

const props = defineProps<DividerProps>()

const COLOR_CLASSES: Record<DividerColor, string> = {
  neutral: 'divider-neutral',
  primary: 'divider-primary',
  secondary: 'divider-secondary',
  accent: 'divider-accent',
  success: 'divider-success',
  warning: 'divider-warning',
  info: 'divider-info',
  error: 'divider-error',
}

const DIRECTION_CLASSES: Record<DividerDirection, string> = {
  horizontal: 'divider-horizontal',
  vertical: 'divider-vertical',
}

const PLACEMENT_CLASSES: Record<DividerPlacement, string> = {
  start: 'divider-start',
  end: 'divider-end',
}

const classNames = computed(() => [
  'divider',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.direction ? DIRECTION_CLASSES[props.direction] : '',
  props.placement ? PLACEMENT_CLASSES[props.placement] : '',
])
</script>

<template>
  <div :class="classNames">
    <slot />
  </div>
</template>
