<script setup lang="ts">
import { computed } from 'vue'

export type TooltipColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

type TooltipProps = {
  title?: string
  color?: TooltipColor
  position?: TooltipPosition
  open?: boolean
}

const props = defineProps<TooltipProps>()

const COLOR_CLASSES: Record<TooltipColor, string> = {
  neutral: 'tooltip-neutral',
  primary: 'tooltip-primary',
  secondary: 'tooltip-secondary',
  accent: 'tooltip-accent',
  info: 'tooltip-info',
  success: 'tooltip-success',
  warning: 'tooltip-warning',
  error: 'tooltip-error',
}

const POSITION_CLASSES: Record<TooltipPosition, string> = {
  top: 'tooltip-top',
  bottom: 'tooltip-bottom',
  left: 'tooltip-left',
  right: 'tooltip-right',
}

const classNames = computed(() => [
  'tooltip',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.position ? POSITION_CLASSES[props.position] : '',
  props.open ? 'tooltip-open' : '',
])
</script>

<template>
  <div :class="classNames" :data-tip="title">
    <slot />
    <div v-if="$slots.title" class="tooltip-content">
      <slot name="title" />
    </div>
  </div>
</template>
