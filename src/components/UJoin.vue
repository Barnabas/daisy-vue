<script setup lang="ts">
import { computed, provide } from 'vue'

export type JoinDirection = 'horizontal' | 'vertical'

type JoinProps = {
  direction?: JoinDirection
}

const { direction } = defineProps<JoinProps>()

const DIRECTION_CLASSES: Record<JoinDirection, string> = {
  horizontal: 'join-horizontal',
  vertical: 'join-vertical',
}

const classNames = computed(() => [
  'join',
  direction ? DIRECTION_CLASSES[direction] : '',
])

provide('insideJoin', true)
</script>

<template>
  <div :class="classNames">
    <slot />
  </div>
</template>
