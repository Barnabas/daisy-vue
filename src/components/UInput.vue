<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue'

export type InputColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'

type InputProps = {
  type?: InputType
  placeholder?: string
  color?: InputColor
  size?: InputSize
  ghost?: boolean
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
})
const attrs = useAttrs()

const model = defineModel<string | number>()

const insideLabel = inject<boolean>('insideLabel', false)
const insideJoin = inject<boolean>('insideJoin', false)

const COLOR_CLASSES: Record<InputColor, string> = {
  neutral: 'input-neutral',
  primary: 'input-primary',
  secondary: 'input-secondary',
  accent: 'input-accent',
  info: 'input-info',
  success: 'input-success',
  warning: 'input-warning',
  error: 'input-error',
}

const SIZE_CLASSES: Record<InputSize, string> = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
}

const classNames = computed(() => [
  insideLabel ? '' : 'input',
  insideJoin ? 'join-item' : '',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.ghost ? 'input-ghost' : '',
  props.validator ? 'validator' : '',
])
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :class="classNames"
    v-bind="attrs"
  />
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
