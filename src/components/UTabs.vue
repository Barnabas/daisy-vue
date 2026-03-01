<script setup lang="ts">
import { computed, provide, useId, type ModelRef } from 'vue'

export type TabsVariant = 'bordered' | 'lifted' | 'boxed'
export type TabsSize = 'xs' | 'sm' | 'md' | 'lg'

type TabsProps = {
  variant?: TabsVariant
  size?: TabsSize
}

const VARIANT_CLASSES: Record<TabsVariant, string> = {
  bordered: 'tabs-border',
  lifted: 'tabs-lift',
  boxed: 'tabs-box',
}

const SIZE_CLASSES: Record<TabsSize, string> = {
  xs: 'tabs-xs',
  sm: 'tabs-sm',
  md: 'tabs-md',
  lg: 'tabs-lg',
}

export type TabsRoot = TabsProps & {
  model: ModelRef<string | number | undefined>
  tabsInputName: string
}

const { variant, size } = defineProps<TabsProps>()

const model = defineModel<string | number>()

// Unique name for radio group
const tabsInputName = useId()

const classNames = computed(() => [
  'tabs',
  variant ? VARIANT_CLASSES[variant] : '',
  size ? SIZE_CLASSES[size] : '',
])

provide('TabsRoot', {
  variant,
  size,
  model,
  tabsInputName,
})
</script>

<template>
  <div role="tablist" :class="classNames">
    <slot />
  </div>
</template>
