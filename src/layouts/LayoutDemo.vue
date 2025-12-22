<script setup lang="ts">
import { COMPONENT_LIST } from '@/utils/components'
import { computed } from 'vue'

const props = defineProps<{ id: string }>()

const componentItem = computed(() => COMPONENT_LIST.find((item) => item.id == props.id))

const daisyUILink = computed(() => 'https://daisyui.com' + componentItem.value?.path + '/')
</script>
<template>
  <section v-if="componentItem">
    <div class="flex gap-4 items-baseline">
      <h1 class="grow">{{ componentItem.label }}</h1>
      <a class="link" :href="componentItem.sourcePath">Component Source</a>
      <a class="link" :href="daisyUILink">daisyUI Reference</a>
    </div>
    <slot />
  </section>
</template>
