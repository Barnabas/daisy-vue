<script setup lang="ts">
import { computed, useAttrs } from 'vue'

export type FileInputColor =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'

export type FileInputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type FileInputProps = {
  color?: FileInputColor
  size?: FileInputSize
  ghost?: boolean
  validator?: boolean
  validatorHint?: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<FileInputProps>()
const attrs = useAttrs()

const model = defineModel<FileList | null>()

const COLOR_CLASSES: Record<FileInputColor, string> = {
  neutral: 'file-input-neutral',
  primary: 'file-input-primary',
  secondary: 'file-input-secondary',
  accent: 'file-input-accent',
  info: 'file-input-info',
  success: 'file-input-success',
  warning: 'file-input-warning',
  error: 'file-input-error',
}

const SIZE_CLASSES: Record<FileInputSize, string> = {
  xs: 'file-input-xs',
  sm: 'file-input-sm',
  md: 'file-input-md',
  lg: 'file-input-lg',
  xl: 'file-input-xl',
}

const classNames = computed(() => [
  'file-input',
  props.color ? COLOR_CLASSES[props.color] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.ghost ? 'file-input-ghost' : '',
  props.validator ? 'validator' : '',
])

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  model.value = target.files
}
</script>

<template>
  <input type="file" :class="classNames" v-bind="attrs" @change="handleChange" />
  <p v-if="validator && validatorHint" class="validator-hint">{{ validatorHint }}</p>
</template>
