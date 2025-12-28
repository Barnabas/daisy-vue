<script setup lang="ts">
import { computed } from 'vue'

export type TimelineDirection = 'vertical' | 'horizontal' | 'responsive'

type TimelineProps = {
  direction?: TimelineDirection
  snap?: boolean
  compact?: boolean
}

const { direction = 'vertical', snap, compact } = defineProps<TimelineProps>()

const classNames = computed(() => {
  const classes = ['timeline', { 'timeline-snap-icon': snap, 'timeline-compact': compact }]

  if (direction === 'vertical') {
    classes.push('timeline-vertical')
  } else if (direction === 'horizontal') {
    classes.push('timeline-horizontal')
  } else if (direction === 'responsive') {
    classes.push('timeline-vertical', 'lg:timeline-horizontal')
  }

  return classes
})
</script>

<template>
  <ul :class="classNames">
    <slot />
  </ul>
</template>
