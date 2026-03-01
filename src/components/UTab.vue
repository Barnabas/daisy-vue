<script setup lang="ts">
import { inject, computed } from 'vue'
import type { TabsRoot } from './UTabs.vue'

const { value, title, disabled } = defineProps<{
  value: string | number
  title?: string
  disabled?: boolean
}>()

const root = inject<TabsRoot>('TabsRoot')

if (!root) {
  console.warn('[UTab] must be used inside a <UTabs> component.')
}

const inputProps = computed(() => ({
  type: 'radio',
  name: root?.tabsInputName,
  value: value,
  disabled: disabled,
}))
</script>

<template>
  <label class="tab">
    <input v-bind="inputProps" v-model="root!.model.value" />
    <slot name="title">{{ title }}</slot>
  </label>
  <div class="tab-content">
    <slot />
  </div>
</template>
