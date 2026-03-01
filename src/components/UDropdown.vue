<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

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

const { placement, direction, title } = defineProps<DropdownProps>()

const detailsEl = useTemplateRef('details')

const classNames = computed(() => [
  'dropdown',
  placement ? PLACEMENT_CLASSES[placement] : '',
  direction === 'top' ? 'dropdown-top' : 'dropdown-bottom',
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

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && detailsEl.value?.hasAttribute('open')) {
    detailsEl.value.removeAttribute('open')
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('click', onBodyClick)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <details ref="details" :class="classNames" @toggle="handleToggle">
    <summary class="btn m-1">
      <slot name="trigger">{{ title }}</slot>
    </summary>
    <ul class="dropdown-content menu bg-base-100 w-52 rounded-box z-1 shadow-sm">
      <slot />
    </ul>
  </details>
</template>
