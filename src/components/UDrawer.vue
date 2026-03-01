<script setup lang="ts">
import { computed } from 'vue'

export type DrawerPlacement = 'start' | 'end'

type DrawerProps = {
  placement?: DrawerPlacement
  sidebarClass?: string
}

const { placement, sidebarClass } = defineProps<DrawerProps>()

const model = defineModel<boolean>({ default: false })

const classNames = computed(() => ['drawer', placement === 'end' ? 'drawer-end' : ''])
</script>

<template>
  <div :class="classNames">
    <input type="checkbox" class="drawer-toggle" v-model="model" />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side">
      <label class="drawer-overlay" @click="model = false"></label>
      <div :class="['min-h-full', sidebarClass]">
        <slot name="side" />
      </div>
    </div>
  </div>
</template>
