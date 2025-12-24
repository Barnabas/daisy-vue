<script setup lang="ts">
import { computed, inject } from 'vue'
import type { AccordionRoot, AccordionIcon } from './UAccordion.vue'

const ICON_CLASSES: Record<AccordionIcon, string> = {
  arrow: 'collapse-arrow',
  plus: 'collapse-plus',
}

const props = defineProps<{ value: string | number; title?: string }>()

const root = inject<AccordionRoot>('AccordionRoot')

const isChecked = computed(() => {
  if (root?.type === 'multiple') {
    return Array.isArray(root.model.value) && root.model.value.includes(props.value)
  }
  return root?.model.value === props.value
})

const iconClass = computed(() => (root?.icon ? ICON_CLASSES[root.icon] : ''))
</script>

<template>
  <div class="collapse join-item border border-base-300" :class="iconClass">
    <input
      :type="root?.type === 'single' ? 'radio' : 'checkbox'"
      :name="root?.accordionInputName"
      :checked="isChecked"
      @change="() => root?.toggle(props.value)"
    />
    <div class="collapse-title text-xl font-medium">
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
