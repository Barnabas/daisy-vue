<script setup lang="ts">
import { computed } from 'vue'

export type DrawerPlacement = 'start' | 'end'

type DrawerProps = {
  placement?: DrawerPlacement
  sidebarClass?: string
}

const props = defineProps<DrawerProps>()

const model = defineModel<boolean>({ default: false })

const classNames = computed(() => ['drawer', props.placement === 'end' ? 'drawer-end' : ''])
</script>

<template>
  <div :class="classNames">
    <input type="checkbox" class="drawer-toggle" v-model="model" />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side">
      <label class="drawer-overlay" @click="model = false"></label>
      <div :class="['min-h-full', props.sidebarClass]">
        <slot name="side" />
      </div>
    </div>
  </div>
</template>
