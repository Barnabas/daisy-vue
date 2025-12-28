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

const props = withDefaults(defineProps<MenuItemProps>(), {
  disabled: false,
  active: false,
  focus: false,
  collapsible: false,
  open: false,
})

const isOpen = ref(props.open)

const itemClasses = computed(() => [
  props.disabled ? 'menu-disabled' : '',
  props.active ? 'menu-active' : '',
  props.focus ? 'menu-focus' : '',
])

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li v-if="collapsible" :class="itemClasses">
    <details
      :open="isOpen"
      @toggle="(e: Event) => (isOpen = (e.target as HTMLDetailsElement).open)"
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
