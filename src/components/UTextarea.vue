<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type TextareaColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type TextareaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type TextareaProps = {
  placeholder?: string
  color?: TextareaColor
  size?: TextareaSize
  ghost?: boolean
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<TextareaProps>()
const attrs = useAttrs()

const model = defineModel<string>()

const COLOR_CLASSES: Record<TextareaColor, string> = {
  neutral: 'textarea-neutral',
  primary: 'textarea-primary',
  secondary: 'textarea-secondary',
  accent: 'textarea-accent',
  info: 'textarea-info',
  success: 'textarea-success',
  warning: 'textarea-warning',
  error: 'textarea-error',
}

const SIZE_CLASSES: Record<TextareaSize, string> = {
  xs: 'textarea-xs',
  sm: 'textarea-sm',
  md: 'textarea-md',
  lg: 'textarea-lg',
  xl: 'textarea-xl',
}

const classNames = computed(() => [
  'textarea',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.ghost ? 'textarea-ghost' : '',
  props.validator ? 'validator' : '',
])
</script>

<template>
  <textarea
    v-model="model"
    :placeholder="placeholder"
    :class="classNames"
    v-bind="attrs"
  ></textarea>
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
