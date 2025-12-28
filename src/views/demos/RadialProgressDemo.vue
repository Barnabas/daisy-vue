<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import URadialProgress from '@/components/URadialProgress.vue'
import { ref } from 'vue'

const PROGRESS_VALUES = [0, 20, 40, 60, 80, 100]

const customValue = ref(70)
</script>

<template>
  <LayoutDemo id="radial-progress">
    <div class="my-4 flex flex-wrap items-center gap-8">
      <div v-for="value in PROGRESS_VALUES" :key="value">
        <URadialProgress :value />
      </div>
    </div>

    <h2>Custom Size and Thickness</h2>
    <div class="my-4 flex flex-wrap items-center gap-8">
      <URadialProgress :value="70" size="3rem" thickness="0.1rem" />
      <URadialProgress :value="70" size="6rem" thickness="1rem" />
      <URadialProgress :value="70" size="8rem" thickness="2rem" />
    </div>

    <h2>Custom Content</h2>
    <div class="my-4 flex flex-wrap items-center gap-8">
      <URadialProgress :value="70">70</URadialProgress>
      <URadialProgress :value="85">
        <div class="text-xs">85%</div>
        <div class="text-xs">Done</div>
      </URadialProgress>
      <URadialProgress :value="50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </URadialProgress>
    </div>

    <h2>With Background and Text Color</h2>
    <div class="my-4 flex flex-wrap items-center gap-8">
      <URadialProgress :value="70" class="text-primary" />
      <URadialProgress :value="70" class="text-secondary" />
      <URadialProgress :value="70" class="text-accent" />
      <URadialProgress :value="70" class="text-success" />
      <URadialProgress :value="70" class="text-warning" />
      <URadialProgress :value="70" class="text-error" />
    </div>

    <h2>Interactive</h2>
    <div class="my-4 flex flex-col gap-4">
      <URadialProgress :value="customValue" />
      <input
        v-model.number="customValue"
        type="range"
        min="0"
        max="100"
        class="range range-primary"
      />
      <div class="text-sm">Drag the slider to change value</div>
    </div>
  </LayoutDemo>
</template>
