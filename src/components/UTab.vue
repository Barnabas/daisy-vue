<script setup lang="ts">
import { inject, computed } from 'vue'
import type { TabsRoot } from './UTabs.vue'

const props = defineProps<{
  value: string | number
  title?: string
  disabled?: boolean
}>()

const root = inject<TabsRoot>('TabsRoot')

const inputProps = computed(() => ({
  type: 'radio',
  name: root?.tabsInputName,
  value: props.value,
  disabled: props.disabled,
}))
</script>

<template>
  <label class="tab">
    <input v-bind="inputProps" v-model="root!.model.value" />
    <slot name="title">{{ props.title }}</slot>
  </label>
  <div class="tab-content">
    <slot />
  </div>
</template>
