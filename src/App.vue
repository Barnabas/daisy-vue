<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { getComponentsBySection } from '@/utils/components'
import UDrawer from '@/components/UDrawer.vue'
import UMenu from '@/components/UMenu.vue'
import UMenuItem from '@/components/UMenuItem.vue'
import UButton from '@/components/UButton.vue'

const sections = getComponentsBySection()
const drawerOpen = ref(false)
</script>

<template>
  <UDrawer v-model="drawerOpen" class="lg:drawer-open" sidebar-class="bg-base-200 w-60">
    <div class="lg:hidden flex gap-4 p-2">
      <UButton size="sm" @click="drawerOpen = true" aria-label="Open drawer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block stroke-current size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </UButton>
      <RouterLink class="font-bold text-primary text-3xl" to="/">Daisy Vue</RouterLink>
    </div>
    <main class="p-4">
      <RouterView />
    </main>
    <template #side>
      <UMenu class="min-h-full w-full">
        <li class="font-bold text-primary text-xl hidden lg:block">
          <RouterLink to="/">Daisy Vue</RouterLink>
        </li>
        <UMenuItem
          v-for="section in sections"
          :key="section.section"
          :title="section.label"
          collapsible
          open
        >
          <UMenu class="w-52">
            <UMenuItem v-for="{ id, item } in section.components" :key="id">
              <RouterLink :to="item.path" active-class="bg-neutral text-neutral-content">
                {{ item.label }}
              </RouterLink>
            </UMenuItem>
          </UMenu>
        </UMenuItem>
      </UMenu>
    </template>
  </UDrawer>
</template>
