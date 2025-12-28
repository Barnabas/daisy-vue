<script setup lang="ts">
import { computed } from 'vue'

export type RadioColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'

export type RadioSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type RadioProps = {
  name?: string
  value?: string | number | boolean
  color?: RadioColor
  size?: RadioSize
}

const props = defineProps<RadioProps>()

const model = defineModel<string | number | boolean>()

const COLOR_CLASSES: Record<RadioColor, string> = {
  neutral: 'radio-neutral',
  primary: 'radio-primary',
  secondary: 'radio-secondary',
  accent: 'radio-accent',
  success: 'radio-success',
  warning: 'radio-warning',
  info: 'radio-info',
  error: 'radio-error',
}

const SIZE_CLASSES: Record<RadioSize, string> = {
  xs: 'radio-xs',
  sm: 'radio-sm',
  md: 'radio-md',
  lg: 'radio-lg',
  xl: 'radio-xl',
}

const classNames = computed(() => [
  'radio',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
])
</script>

<template>
  <input type="radio" v-model="model" :name :value :class="classNames" />
</template>
