<script setup lang="ts">
import { ref, computed } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UFileInput, { type FileInputColor, type FileInputSize } from '@/components/UFileInput.vue'

const FILE_INPUT_COLORS: FileInputColor[] = [
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
]

const FILE_INPUT_SIZES: FileInputSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

const files = ref<FileList | null>(null)

const fileNames = computed(() => {
  if (!files.value) return 'No file selected'
  return Array.from(files.value)
    .map((f) => f.name)
    .join(', ')
})
</script>

<template>
  <LayoutDemo id="file-input">
    <div class="my-4">
      <h3 class="mb-2">Basic File Input with v-model</h3>
      <div class="flex flex-col gap-2">
        <UFileInput v-model="files" />
        <span>Selected: {{ fileNames }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Colors</h3>
      <div class="flex flex-col gap-2">
        <div v-for="color in FILE_INPUT_COLORS" :key="color" class="flex items-center gap-2">
          <UFileInput :color="color" />
          <span>{{ color }}</span>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-col gap-2">
        <div v-for="size in FILE_INPUT_SIZES" :key="size" class="flex items-center gap-2">
          <UFileInput :size="size" />
          <span>{{ size }}</span>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Ghost Style</h3>
      <UFileInput ghost />
    </div>

    <div class="my-4">
      <h3 class="mb-2">With Validator (required)</h3>
      <p class="text-sm mb-2">The validator hint shows when no file is selected but required.</p>
      <UFileInput validator validator-hint="Please select a file" required />
    </div>
  </LayoutDemo>
</template>
