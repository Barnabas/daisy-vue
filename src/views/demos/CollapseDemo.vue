<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UCollapse, { type CollapseIcon } from '@/components/UCollapse.vue'

const COLLAPSE_ICONS: CollapseIcon[] = ['arrow', 'plus']
</script>

<template>
  <LayoutDemo id="collapse">
    <h3>Checkbox Method (default)</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <UCollapse title="Click to open/close">
        <p>This collapse uses the checkbox method. Click the title to toggle.</p>
      </UCollapse>

      <UCollapse>
        <template #title>
          <span class="text-primary">Custom Title Slot</span>
        </template>
        <p>This collapse uses a named slot for the title.</p>
      </UCollapse>
    </div>

    <h3>Focus Method</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <UCollapse title="Focus to open" focus>
        <p>This collapse uses the focus method. It opens on focus and closes when focus is lost.</p>
      </UCollapse>

      <UCollapse focus>
        <template #title>Focus with Custom Title</template>
        <p>Focus method with a custom title slot.</p>
      </UCollapse>
    </div>

    <h3>With Icons</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <UCollapse v-for="icon in COLLAPSE_ICONS" :key="icon" :icon :title="`Icon: ${icon}`">
        <p>This collapse has the {{ icon }} icon indicator.</p>
      </UCollapse>
    </div>

    <h3>Forced States</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <UCollapse title="Forced Open" open icon="arrow">
        <p>This collapse is forced to stay open with the <code>open</code> prop.</p>
      </UCollapse>

      <UCollapse title="Forced Closed" closed icon="arrow">
        <p>This content won't be visible because the collapse is forced closed.</p>
      </UCollapse>
    </div>
  </LayoutDemo>
</template>
