<script setup lang="ts">
import { computed } from 'vue'

type RadialProgressProps = {
  value: number
  size?: string
  thickness?: string
}

const { value, size = '5rem', thickness = '0.5rem' } = defineProps<RadialProgressProps>()

const style = computed(() => ({
  '--value': value,
  '--size': size,
  '--thickness': thickness,
}))
</script>

<template>
  <div class="radial-progress" :style="style" :aria-valuenow="value" role="progressbar">
    <slot>{{ value }}%</slot>
  </div>
</template>
