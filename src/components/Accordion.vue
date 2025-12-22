<script setup lang="ts">
import { provide, useId, type ModelRef } from 'vue'

export type AccordionType = 'single' | 'multiple'

export type AccordionIcon = 'arrow' | 'plus'

type AccordionProps = {
  type?: AccordionType
  icon?: AccordionIcon
}

export type AccordionRoot = AccordionProps & {
  model: ModelRef<(string | number)[] | string | number>
  toggle: (value: string | number) => void
  accordionInputName: string
}

const props = withDefaults(defineProps<AccordionProps>(), {
  type: 'single',
  icon: 'arrow',
})

const model = defineModel<(string | number)[] | string | number>()

// Unique name for radio group
const accordionInputName = useId()

function toggle(value: string | number) {
  if (props.type === 'multiple') {
    const newValue = [...(Array.isArray(model.value) ? model.value : [])]
    if (newValue.includes(value)) {
      newValue.splice(newValue.indexOf(value), 1)
    } else {
      newValue.push(value)
    }
    model.value = newValue
  } else {
    model.value = model.value === value ? undefined : value
  }
}

provide('AccordionRoot', {
  type: props.type,
  icon: props.icon,
  model,
  toggle,
  accordionInputName,
})
</script>

<template>
  <div class="join join-vertical w-full">
    <slot />
  </div>
</template>
