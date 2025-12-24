<script setup lang="ts">
import { computed } from 'vue'

type StatProps = {
  title?: string
  value?: string
  desc?: string
  centered?: boolean
}

const props = defineProps<StatProps>()

const classNames = computed(() => [
  'stat',
  props.centered ? 'place-items-center' : '',
])
</script>

<template>
  <div :class="classNames">
    <div v-if="$slots.figure" class="stat-figure">
      <slot name="figure" />
    </div>
    <div v-if="title || $slots.title" class="stat-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="value || $slots.value" class="stat-value">
      <slot name="value">{{ value }}</slot>
    </div>
    <div v-if="desc || $slots.desc" class="stat-desc">
      <slot name="desc">{{ desc }}</slot>
    </div>
    <div v-if="$slots.actions" class="stat-actions">
      <slot name="actions" />
    </div>
  </div>
</template>
