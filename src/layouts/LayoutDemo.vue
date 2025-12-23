<script setup lang="ts">
import { COMPONENTS, type ComponentId } from '@/utils/components'
import { computed } from 'vue'

const props = defineProps<{ id: ComponentId }>()

const SOURCE_LINK_ROOT = 'https://github.com/Barnabas/daisy-vue/blob/main/src'

const componentItem = computed(() => COMPONENTS[props.id])

const daisyUILink = computed(() => `https://daisyui.com${componentItem.value?.path}/`)

const componentSourceLink = computed(
  () => `${SOURCE_LINK_ROOT}${componentItem.value?.componentSource}`,
)

const demoSourceLink = computed(() => `${SOURCE_LINK_ROOT}${componentItem.value?.demoSource}`)
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
