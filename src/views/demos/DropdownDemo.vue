<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import BaseDropdown, { type DropdownPlacement } from '@/components/BaseDropdown.vue'

const DROPDOWN_PLACEMENTS: DropdownPlacement[] = ['start', 'center', 'end', 'left', 'right']
</script>

<template>
  <LayoutDemo id="dropdown">
    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Placements:</h3>
      <BaseDropdown
        v-for="placement in DROPDOWN_PLACEMENTS"
        :key="placement"
        :placement="placement"
      >
        <template #trigger>{{ placement }}</template>
        {{ placement }} content
      </BaseDropdown>
    </div>
  </LayoutDemo>
</template>
