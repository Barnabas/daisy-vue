<script setup lang="ts">
import { computed } from 'vue'

export type StatsDirection = 'horizontal' | 'vertical' | 'responsive'

type StatsProps = {
  direction?: StatsDirection
}

const props = withDefaults(defineProps<StatsProps>(), {
  direction: 'horizontal',
  shadow: false,
})

const classNames = computed(() => {
  const classes = ['stats', 'shadow']

  if (props.direction === 'vertical') {
    classes.push('stats-vertical')
  } else if (props.direction === 'responsive') {
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
