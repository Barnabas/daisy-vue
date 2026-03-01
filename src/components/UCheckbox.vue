<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type CheckboxColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type CheckboxProps = {
  color?: CheckboxColor
  size?: CheckboxSize
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const { color, size, validator, validatorHint } = defineProps<CheckboxProps>()
const attrs = useAttrs()

const model = defineModel<boolean>()

const COLOR_CLASSES: Record<CheckboxColor, string> = {
  neutral: 'checkbox-neutral',
  primary: 'checkbox-primary',
  secondary: 'checkbox-secondary',
  accent: 'checkbox-accent',
  info: 'checkbox-info',
  success: 'checkbox-success',
  warning: 'checkbox-warning',
  error: 'checkbox-error',
}

const SIZE_CLASSES: Record<CheckboxSize, string> = {
  xs: 'checkbox-xs',
  sm: 'checkbox-sm',
  md: 'checkbox-md',
  lg: 'checkbox-lg',
  xl: 'checkbox-xl',
}

const classNames = computed(() => [
  'checkbox',
  color ? COLOR_CLASSES[color] : '',
  size ? SIZE_CLASSES[size] : '',
  validator ? 'validator' : '',
])
</script>

<template>
  <input type="checkbox" v-model="model" :class="classNames" v-bind="attrs" />
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
