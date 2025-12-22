<script setup lang="ts">
import { computed } from 'vue'

export type DropdownPlacement = 'start' | 'center' | 'end' | 'left' | 'right'

type DropdownProps = {
  placement?: DropdownPlacement
}

const props = defineProps<DropdownProps>()

const PLACEMENT_CLASSES: Record<DropdownPlacement, string> = {
  start: 'dropdown-start',
  center: 'dropdown-center',
  end: 'dropdown-end',
  left: 'dropdown-left',
  right: 'dropdown-right',
}

const classNames = computed(() => [
  'dropdown',
  props.placement ? PLACEMENT_CLASSES[props.placement] : '',
])
</script>

<template>
  <details :class="classNames">
    <summary class="btn m-1">
      <slot name="trigger" />
    </summary>
    <div class="dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <slot />
    </div>
  </details>
</template>
