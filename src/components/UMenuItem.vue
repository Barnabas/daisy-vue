<script setup lang="ts">
import { computed, ref } from 'vue'

type MenuItemProps = {
  disabled?: boolean
  active?: boolean
  focus?: boolean
  title?: string
  collapsible?: boolean
  open?: boolean
}

const { disabled = false, active = false, focus = false, collapsible = false, open = false, title } = defineProps<MenuItemProps>()

const isOpen = ref(open)

const itemClasses = computed(() => [
  disabled ? 'menu-disabled' : '',
  active ? 'menu-active' : '',
  focus ? 'menu-focus' : '',
])

function toggle() {
  isOpen.value = !isOpen.value
}

function handleToggle(e: Event) {
  isOpen.value = (e.target as HTMLDetailsElement).open
}
</script>

<template>
  <li v-if="collapsible" :class="itemClasses">
    <details
      :open="isOpen"
      @toggle="handleToggle"
    >
      <summary>
        <slot name="title">{{ title }}</slot>
      </summary>
      <slot />
    </details>
  </li>
  <li v-else :class="itemClasses">
    <slot name="default" :toggle="toggle">
      <a>
        <slot name="title">{{ title }}</slot>
      </a>
    </slot>
  </li>
</template>
