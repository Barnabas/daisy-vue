<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type ToggleColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type ToggleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ToggleProps = {
  color?: ToggleColor
  size?: ToggleSize
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const { color, size, validator, validatorHint } = defineProps<ToggleProps>()
const attrs = useAttrs()

const model = defineModel<boolean>()

const COLOR_CLASSES: Record<ToggleColor, string> = {
  neutral: 'toggle-neutral',
  primary: 'toggle-primary',
  secondary: 'toggle-secondary',
  accent: 'toggle-accent',
  info: 'toggle-info',
  success: 'toggle-success',
  warning: 'toggle-warning',
  error: 'toggle-error',
}

const SIZE_CLASSES: Record<ToggleSize, string> = {
  xs: 'toggle-xs',
  sm: 'toggle-sm',
  md: 'toggle-md',
  lg: 'toggle-lg',
  xl: 'toggle-xl',
}

const classNames = computed(() => [
  'toggle',
  color ? COLOR_CLASSES[color] : '',
  size ? SIZE_CLASSES[size] : '',
  validator ? 'validator' : '',
])
</script>

<template>
  <input type="checkbox" v-model="model" :class="classNames" v-bind="attrs" />
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
