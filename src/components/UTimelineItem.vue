<script setup lang="ts">
import { computed } from 'vue'

type TimelineItemProps = {
  box?: boolean
}

const props = withDefaults(defineProps<TimelineItemProps>(), {
  box: false,
})

const endClassNames = computed(() => {
  const classes = ['timeline-end']
  if (props.box) {
    classes.push('timeline-box')
  }
  return classes
})
</script>

<template>
  <li>
    <hr v-if="$slots.start || $slots.default" />
    <div v-if="$slots.start" class="timeline-start">
      <slot name="start" />
    </div>
    <div class="timeline-middle">
      <slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <circle cx="10" cy="10" r="6" />
        </svg>
      </slot>
    </div>
    <div v-if="$slots.end" :class="endClassNames">
      <slot name="end" />
    </div>
    <hr v-if="$slots.end || $slots.default" />
  </li>
</template>
