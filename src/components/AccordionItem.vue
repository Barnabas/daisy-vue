<script setup lang="ts">
import { computed, inject } from 'vue'
import type { Ref } from 'vue'

const props = defineProps<{
  value: string | number
}>()

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

const iconClass = computed(() => {
  if (AccordionRoot?.icon === 'arrow') {
    return 'collapse-arrow'
  }
  if (AccordionRoot?.icon === 'plus') {
    return 'collapse-plus'
  }
  return ''
})
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
      <slot name="title" />
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
