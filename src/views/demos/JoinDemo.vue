<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UJoin from '@/components/UJoin.vue'
import UButton from '@/components/UButton.vue'
import UInput from '@/components/UInput.vue'
import USelect from '@/components/USelect.vue'

const searchOptions = [
  { value: 'all', label: 'All' },
  { value: 'posts', label: 'Posts' },
  { value: 'users', label: 'Users' },
]
</script>

<template>
  <LayoutDemo id="join">
    <div class="my-2 flex flex-wrap gap-4 items-start">
      <div>
        <h3 class="mb-2">Horizontal (default):</h3>
        <UJoin>
          <UButton>Button 1</UButton>
          <UButton>Button 2</UButton>
          <UButton>Button 3</UButton>
        </UJoin>
      </div>
      <div>
        <h3 class="mb-2">Vertical:</h3>
        <UJoin direction="vertical">
          <UButton>Button 1</UButton>
          <UButton>Button 2</UButton>
          <UButton>Button 3</UButton>
        </UJoin>
      </div>
    </div>
    <div class="my-2">
      <h3 class="mb-2">With colors:</h3>
      <UJoin>
        <UButton color="primary">Primary</UButton>
        <UButton color="secondary">Secondary</UButton>
        <UButton color="accent">Accent</UButton>
      </UJoin>
    </div>
    <div class="my-2">
      <h3 class="mb-2">With input and button:</h3>
      <UJoin>
        <UInput placeholder="Search..." />
        <UButton color="primary">Search</UButton>
      </UJoin>
    </div>
    <div class="my-2">
      <h3 class="mb-2">With select and input:</h3>
      <UJoin>
        <USelect :options="searchOptions" />
        <UInput placeholder="Search..." />
        <UButton color="primary">Go</UButton>
      </UJoin>
    </div>
    <div class="my-2">
      <h3 class="mb-2">Pagination:</h3>
      <UJoin>
        <UButton type="outline">1</UButton>
        <UButton type="outline">2</UButton>
        <UButton color="primary">3</UButton>
        <UButton type="outline">4</UButton>
        <UButton type="outline">5</UButton>
      </UJoin>
    </div>
    <div class="my-2">
      <h3 class="mb-2">Pagination with arrows:</h3>
      <UJoin>
        <UButton type="outline">&laquo;</UButton>
        <UButton type="outline">Previous</UButton>
        <UButton type="outline">Next</UButton>
        <UButton type="outline">&raquo;</UButton>
      </UJoin>
    </div>
  </LayoutDemo>
</template>
