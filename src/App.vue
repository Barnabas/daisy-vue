<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { getComponentsBySection } from '@/utils/components'
import UMenu from '@/components/UMenu.vue'
import UMenuItem from '@/components/UMenuItem.vue'

const sections = getComponentsBySection()
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <div class="w-full flex justify-end p-2 lg:hidden">
        <label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>
      </div>
      <main class="p-4">
        <RouterView />
      </main>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <UMenu class="w-60 min-h-full">
        <li class="font-bold text-primary text-xl">
          <RouterLink to="/">Daisy Vue</RouterLink>
        </li>
        <UMenuItem
          v-for="section in sections"
          :key="section.section"
          :title="section.label"
          collapsible
          open
        >
          <UMenu>
            <UMenuItem v-for="{ id, item } in section.components" :key="id">
              <RouterLink :to="item.path" active-class="bg-neutral text-neutral-content">
                {{ item.label }}
              </RouterLink>
            </UMenuItem>
          </UMenu>
        </UMenuItem>
      </UMenu>
    </div>
  </div>
</template>
