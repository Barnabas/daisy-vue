<script setup lang="ts">
import { computed, inject } from 'vue'
import type { Ref } from 'vue'
import type { AccordionIcon } from './Accordion.vue'

const ICON_CLASSES: Record<AccordionIcon, string> = {
  arrow: 'collapse-arrow',
  plus: 'collapse-plus',
}

const props = defineProps<{ value: string | number; title?: string }>()

const AccordionRoot = inject<{
  model: Ref<(string | number)[] | string | number | undefined>
  type: 'single' | 'multiple'
  icon: 'arrow' | 'plus'
  toggle: (value: string | number) => void
  accordionInputName: Ref<string>
}>('AccordionRoot')

const isChecked = computed(() => {
  if (AccordionRoot?.type === 'multiple') {
    return (
      Array.isArray(AccordionRoot.model.value) && AccordionRoot.model.value.includes(props.value)
    )
  }
  return AccordionRoot?.model.value === props.value
})

const iconClass = computed(() => (AccordionRoot?.icon ? ICON_CLASSES[AccordionRoot.icon] : ''))
</script>

<template>
  <div class="collapse join-item border border-base-300" :class="iconClass">
    <input
      :type="AccordionRoot?.type === 'single' ? 'radio' : 'checkbox'"
      :name="AccordionRoot?.accordionInputName.value"
      :checked="isChecked"
      @change="() => AccordionRoot?.toggle(props.value)"
    />
    <div class="collapse-title text-xl font-medium">
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
