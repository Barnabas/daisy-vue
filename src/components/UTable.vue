<script setup lang="ts">
import { computed } from 'vue'

type TableSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type TableProps = {
  zebra?: boolean
  pinRows?: boolean
  pinCols?: boolean
  size?: TableSize
}

const SIZE_CLASSES: Record<TableSize, string> = {
  xs: 'table-xs',
  sm: 'table-sm',
  md: 'table-md',
  lg: 'table-lg',
  xl: 'table-xl',
}

const props = defineProps<TableProps>()

const tableClasses = computed(() => [
  'table',
  {
    'table-zebra': props.zebra,
    'table-pin-rows': props.pinRows,
    'table-pin-cols': props.pinCols,
  },
  props.size ? SIZE_CLASSES[props.size] : '',
])
</script>

<template>
  <div class="overflow-x-auto">
    <table :class="tableClasses">
      <thead v-if="$slots.head">
        <slot name="head" />
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>
