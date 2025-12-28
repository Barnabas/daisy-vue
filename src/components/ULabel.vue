<script setup lang="ts">
import { computed, provide } from 'vue'

type LabelTypes = 'input' | 'select'

type LabelProps = {
  title?: string
  floating?: boolean
  type?: LabelTypes
}

const { title, floating, type = 'input' } = defineProps<LabelProps>()

const classNames = computed(() => [floating ? 'floating-label' : type])

provide('insideLabel', !floating)
</script>

<template>
  <label :class="classNames">
    <slot name="before">
      <span class="label">{{ title }}</span>
    </slot>
    <slot />
    <slot name="after" />
  </label>
</template>
