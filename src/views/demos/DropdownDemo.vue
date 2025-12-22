<script setup lang="ts">
import Dropdown, { type DropdownPlacement } from '@/components/Dropdown.vue'

const DROPDOWN_PLACEMENTS: DropdownPlacement[] = ['start', 'center', 'end', 'left', 'right']
</script>

<template>
  <section>
    <h1>Dropdown</h1>

    <div class="my-2 flex flex-wrap gap-2 items-baseline">
      <h3 class="w-24">Placements:</h3>
      <Dropdown v-for="placement in DROPDOWN_PLACEMENTS" :key="placement" :placement="placement">
        <template #trigger>{{ placement }}</template>
        {{ placement }} content
      </Dropdown>
    </div>
  </section>
</template>
