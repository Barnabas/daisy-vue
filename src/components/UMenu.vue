<script setup lang="ts">
import { computed } from 'vue'

export type MenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type MenuDirection = 'vertical' | 'horizontal'

type MenuProps = {
  title?: string
  size?: MenuSize
  direction?: MenuDirection
  class?: string
}

const SIZE_CLASSES: Record<MenuSize, string> = {
  xs: 'menu-xs',
  sm: 'menu-sm',
  md: 'menu-md',
  lg: 'menu-lg',
  xl: 'menu-xl',
}

const DIRECTION_CLASSES: Record<MenuDirection, string> = {
  vertical: 'menu-vertical',
  horizontal: 'menu-horizontal',
}

const props = defineProps<MenuProps>()

const classNames = computed(() => [
  'menu',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.direction ? DIRECTION_CLASSES[props.direction] : '',
  props.class,
])
</script>

<template>
  <ul :class="classNames">
    <li v-if="title" class="menu-title">{{ title }}</li>
    <slot />
  </ul>
</template>
