<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type ToggleColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'

export type ToggleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type ToggleProps = {
  color?: ToggleColor
  size?: ToggleSize
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<ToggleProps>()
const attrs = useAttrs()

const model = defineModel<boolean>()

const COLOR_CLASSES: Record<ToggleColor, string> = {
  primary: 'toggle-primary',
  secondary: 'toggle-secondary',
  accent: 'toggle-accent',
  neutral: 'toggle-neutral',
  success: 'toggle-success',
  warning: 'toggle-warning',
  info: 'toggle-info',
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
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.validator ? 'validator' : '',
])
</script>

<template>
  <input type="checkbox" v-model="model" :class="classNames" v-bind="attrs" />
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
