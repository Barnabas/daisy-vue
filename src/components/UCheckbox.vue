<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type CheckboxColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'

export type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type CheckboxProps = {
  color?: CheckboxColor
  size?: CheckboxSize
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<CheckboxProps>()
const attrs = useAttrs()

const model = defineModel<boolean>()

const COLOR_CLASSES: Record<CheckboxColor, string> = {
  primary: 'checkbox-primary',
  secondary: 'checkbox-secondary',
  accent: 'checkbox-accent',
  neutral: 'checkbox-neutral',
  success: 'checkbox-success',
  warning: 'checkbox-warning',
  info: 'checkbox-info',
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
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.validator ? 'validator' : '',
])
</script>

<template>
  <input type="checkbox" v-model="model" :class="classNames" v-bind="attrs" />
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
