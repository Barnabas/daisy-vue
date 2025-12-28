<script setup lang="ts">
import { computed } from 'vue'

export type StepColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

type StepProps = {
  color?: StepColor
  content?: string | number
}

const COLOR_CLASSES: Record<StepColor, string> = {
  neutral: 'step-neutral',
  primary: 'step-primary',
  secondary: 'step-secondary',
  accent: 'step-accent',
  info: 'step-info',
  success: 'step-success',
  warning: 'step-warning',
  error: 'step-error',
}

const props = defineProps<StepProps>()

const classNames = computed(() => {
  const classes = ['step']

  if (props.color) {
    classes.push(COLOR_CLASSES[props.color])
  }

  return classes
})
</script>

<template>
  <li :class="classNames" :data-content="content">
    <slot />
  </li>
</template>
