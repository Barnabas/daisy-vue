<script setup lang="ts">
import { COMPONENT_LIST, SOURCE_LINK_ROOT } from '@/utils/components'
import { computed } from 'vue'

const props = defineProps<{ id: string }>()

const componentItem = computed(() => COMPONENT_LIST.find((item) => item.id == props.id))

const daisyUILink = computed(() => `https://daisyui.com${componentItem.value?.path}/`)

const componentSourceLink = computed(() => `${SOURCE_LINK_ROOT}${componentItem.value?.sourcePath}`)

const demoSourceLink = computed(() => `${SOURCE_LINK_ROOT}${componentItem.value?.demoPath}`)
</script>
<template>
  <section v-if="componentItem">
    <div class="flex gap-4 items-baseline">
      <h1 class="grow">{{ componentItem.label }}</h1>
      <a class="link" :href="componentSourceLink">Component</a>
      <a class="link" :href="demoSourceLink">Demo</a>
      <a class="link" :href="daisyUILink">daisyUI</a>
    </div>
    <slot />
  </section>
</template>
