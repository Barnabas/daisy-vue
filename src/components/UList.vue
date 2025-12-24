<script setup lang="ts">
type ListProps = {
  tag?: 'ul' | 'ol'
}

const { tag = 'ul' } = defineProps<ListProps>()
</script>

<template>
  <component :is="tag" class="list bg-base-100 rounded-box shadow-md">
    <slot />
  </component>
</template>
