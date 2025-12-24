<script setup lang="ts">
import { computed } from 'vue'

export type CollapseIcon = 'arrow' | 'plus'

type CollapseProps = {
  title?: string
  focus?: boolean
  icon?: CollapseIcon
  open?: boolean
  closed?: boolean
}

const ICON_CLASSES: Record<CollapseIcon, string> = {
  arrow: 'collapse-arrow',
  plus: 'collapse-plus',
}

const props = withDefaults(defineProps<CollapseProps>(), {
  focus: false,
})

const classNames = computed(() => [
  'collapse',
  'bg-base-100',
  'border',
  'border-base-300',
  props.icon ? ICON_CLASSES[props.icon] : '',
  props.open ? 'collapse-open' : '',
  props.closed ? 'collapse-close' : '',
])
</script>

<template>
  <div :class="classNames" :tabindex="focus ? 0 : undefined">
    <input v-if="!focus" type="checkbox" />
    <div class="collapse-title font-semibold">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="collapse-content">
      <slot />
    </div>
  </div>
</template>
