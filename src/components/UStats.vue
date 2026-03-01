<script setup lang="ts">
import { computed } from 'vue'

export type StatsDirection = 'horizontal' | 'vertical' | 'responsive'

type StatsProps = {
  direction?: StatsDirection
}

const { direction = 'horizontal' } = defineProps<StatsProps>()

const classNames = computed(() => {
  const classes = ['stats', 'shadow']

  if (direction === 'vertical') {
    classes.push('stats-vertical')
  } else if (direction === 'responsive') {
    classes.push('stats-vertical', 'lg:stats-horizontal')
  }

  return classes
})
</script>

<template>
  <div :class="classNames">
    <slot />
  </div>
</template>
