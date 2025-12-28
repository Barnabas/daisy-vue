<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue'

export type SelectColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type SelectSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type SelectOption = {
  value: string | number
  label: string
  disabled?: boolean
}

type SelectProps = {
  options?: SelectOption[]
  placeholder?: string
  color?: SelectColor
  size?: SelectSize
  ghost?: boolean
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<SelectProps>()
const attrs = useAttrs()

const model = defineModel<string | number>()

const insideJoin = inject<boolean>('insideJoin', false)

const COLOR_CLASSES: Record<SelectColor, string> = {
  neutral: 'select-neutral',
  primary: 'select-primary',
  secondary: 'select-secondary',
  accent: 'select-accent',
  info: 'select-info',
  success: 'select-success',
  warning: 'select-warning',
  error: 'select-error',
}

const SIZE_CLASSES: Record<SelectSize, string> = {
  xs: 'select-xs',
  sm: 'select-sm',
  md: 'select-md',
  lg: 'select-lg',
  xl: 'select-xl',
}

const classNames = computed(() => [
  'select',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.ghost ? 'select-ghost' : '',
  props.validator ? 'validator' : '',
  insideJoin ? 'join-item' : '',
])
</script>

<template>
  <select v-model="model" :class="classNames" v-bind="attrs">
    <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
    <slot>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </slot>
  </select>
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
