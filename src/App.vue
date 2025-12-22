<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

// Note: links should be in alphabetical order
const links = [
  { to: '/components/accordion', label: 'Accordion' },
  { to: '/components/alert', label: 'Alert' },
  { to: '/components/button', label: 'Button' },
  { to: '/components/dropdown', label: 'Dropdown' },
]
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
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li class="font-bold text-primary text-xl">
          <RouterLink to="/">Daisy Vue</RouterLink>
        </li>
        <li v-for="link in links" :key="link.to">
          <RouterLink :to="link.to" activeClass="bg-neutral text-neutral-content">
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
