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

const props = defineProps<TabsProps>()

const model = defineModel<string | number>()

// Unique name for radio group
const tabsInputName = useId()

const classNames = computed(() => [
  'tabs',
  props.variant ? VARIANT_CLASSES[props.variant] : '',
  props.size ? SIZE_CLASSES[props.size] : '',
])

provide('TabsRoot', {
  variant: props.variant,
  size: props.size,
  model,
  tabsInputName,
})
</script>

<template>
  <div role="tablist" :class="classNames">
    <slot />
  </div>
</template>
