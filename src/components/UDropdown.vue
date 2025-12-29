<script setup lang="ts">
import { computed, onBeforeUnmount, useTemplateRef } from 'vue'

export type DropdownPlacement = 'start' | 'center' | 'end' | 'left' | 'right'

export type DropdownDirection = 'top' | 'bottom'

type DropdownProps = {
  placement?: DropdownPlacement
  direction?: DropdownDirection
  title?: string
}

const PLACEMENT_CLASSES: Record<DropdownPlacement, string> = {
  start: 'dropdown-start',
  center: 'dropdown-center',
  end: 'dropdown-end',
  left: 'dropdown-left',
  right: 'dropdown-right',
}

const props = defineProps<DropdownProps>()

const detailsEl = useTemplateRef('details')

const classNames = computed(() => [
  'dropdown',
  props.placement ? PLACEMENT_CLASSES[props.placement] : '',
  props.direction === 'top' ? 'dropdown-top' : 'dropdown-bottom',
])

function onBodyClick() {
  detailsEl.value?.removeAttribute('open')
}

function handleToggle(e: ToggleEvent) {
  if (e.newState === 'open') {
    document.body.addEventListener('click', onBodyClick)
  } else {
    document.body.removeEventListener('click', onBodyClick)
  }
}

onBeforeUnmount(() => {
  document.body.removeEventListener('click', onBodyClick)
})
</script>

<template>
  <details ref="details" :class="classNames" @toggle="handleToggle">
    <summary class="btn m-1">
      <slot name="trigger">{{ props.title }}</slot>
    </summary>
    <ul class="dropdown-content menu bg-base-100 w-52 rounded-box z-1 shadow-sm">
      <slot />
    </ul>
  </details>
</template>
