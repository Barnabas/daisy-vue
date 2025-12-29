<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UDropdown, {
  type DropdownDirection,
  type DropdownPlacement,
} from '@/components/UDropdown.vue'

const DROPDOWN_DIRECTIONS: DropdownDirection[] = ['bottom', 'top']
const DROPDOWN_PLACEMENTS: DropdownPlacement[] = ['start', 'center', 'end']
</script>

<template>
  <LayoutDemo id="dropdown">
    <div
      v-for="direction in DROPDOWN_DIRECTIONS"
      :key="direction"
      class="my-2 flex flex-wrap gap-2 items-baseline"
    >
      <h3 class="w-30 capitalize">{{ direction }}:</h3>
      <UDropdown
        v-for="placement in DROPDOWN_PLACEMENTS"
        :key="placement"
        :placement
        :direction
        :title="placement"
      >
        <li><a>One</a></li>
        <li><a>Two</a></li>
        <li><a>Three</a></li>
      </UDropdown>
    </div>
  </LayoutDemo>
</template>
