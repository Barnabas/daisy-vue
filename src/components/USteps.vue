<script setup lang="ts">
import { computed } from 'vue'

export type StepsDirection = 'vertical' | 'horizontal' | 'responsive'

type StepsProps = {
  direction?: StepsDirection
}

const { direction = 'horizontal' } = defineProps<StepsProps>()

const classNames = computed(() => {
  const classes = ['steps']

  if (direction === 'vertical') {
    classes.push('steps-vertical')
  } else if (direction === 'horizontal') {
    classes.push('steps-horizontal')
  } else if (direction === 'responsive') {
    classes.push('steps-vertical', 'lg:steps-horizontal')
  }

  return classes
})
</script>

<template>
  <ul :class="classNames">
    <slot />
  </ul>
</template>
