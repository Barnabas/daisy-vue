<script setup lang="ts">
import { computed } from 'vue'

export type MenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type MenuDirection = 'vertical' | 'horizontal' | 'responsive'

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
  responsive: 'menu-vertical lg:menu-horizontal',
}

const { title, size, direction, class: extraClass } = defineProps<MenuProps>()

const classNames = computed(() => [
  'menu',
  size ? SIZE_CLASSES[size] : '',
  direction ? DIRECTION_CLASSES[direction] : '',
  extraClass,
])
</script>

<template>
  <ul :class="classNames" role="menu">
    <li v-if="title" class="menu-title">{{ title }}</li>
    <slot />
  </ul>
</template>
