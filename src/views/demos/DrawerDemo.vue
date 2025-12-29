<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UDrawer from '@/components/UDrawer.vue'
import UButton from '@/components/UButton.vue'
import UMenu from '@/components/UMenu.vue'
import UMenuItem from '@/components/UMenuItem.vue'

const drawerOpen = ref(false)
const drawerEndOpen = ref(false)
</script>

<template>
  <LayoutDemo id="drawer">
    <div class="my-4">
      <h3 class="mb-2">Default (start) placement:</h3>
      <UDrawer v-model="drawerOpen" class="lg:z-20" sidebar-class="bg-base-200 w-80 p-4">
        <div class="p-4">
          <UButton @click="drawerOpen = true">Open Drawer</UButton>
          <p class="mt-4">Main content goes here. Click the button to open the sidebar.</p>
        </div>
        <template #side>
          <UMenu>
            <UMenuItem>Sidebar Item 1</UMenuItem>
            <UMenuItem>Sidebar Item 2</UMenuItem>
            <UMenuItem>Sidebar Item 3</UMenuItem>
          </UMenu>
        </template>
      </UDrawer>
    </div>

    <div class="my-4">
      <h3 class="mb-2">End placement:</h3>
      <UDrawer
        v-model="drawerEndOpen"
        placement="end"
        class="lg:z-20"
        sidebar-class="bg-base-200 w-80 p-4"
      >
        <div class="p-4">
          <UButton @click="drawerEndOpen = true">Open Drawer (End)</UButton>
          <p class="mt-4">This drawer opens from the right side.</p>
        </div>
        <template #side>
          <UMenu>
            <UMenuItem>Right Sidebar Item 1</UMenuItem>
            <UMenuItem>Right Sidebar Item 2</UMenuItem>
            <UMenuItem>Right Sidebar Item 3</UMenuItem>
          </UMenu>
        </template>
      </UDrawer>
    </div>
  </LayoutDemo>
</template>
