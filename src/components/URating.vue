<script setup lang="ts">
import { computed } from 'vue'

export type RatingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type RatingMask =
  | 'star'
  | 'star-2'
  | 'heart'
  | 'hexagon'
  | 'hexagon-2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'square'
  | 'circle'
  | 'triangle'
  | 'triangle-2'
  | 'triangle-3'
  | 'triangle-4'

type RatingProps = {
  name?: string
  count?: number
  size?: RatingSize
  mask?: RatingMask
  half?: boolean
  hidden?: boolean
}

const props = withDefaults(defineProps<RatingProps>(), {
  size: 'md',
  count: 5,
  mask: 'star',
})

const model = defineModel<number>()

const SIZE_CLASSES: Record<RatingSize, string> = {
  xs: 'rating-xs',
  sm: 'rating-sm',
  md: 'rating-md',
  lg: 'rating-lg',
  xl: 'rating-xl',
}

const MASK_CLASSES: Record<RatingMask, string> = {
  star: 'mask-star',
  'star-2': 'mask-star-2',
  heart: 'mask-heart',
  hexagon: 'mask-hexagon',
  'hexagon-2': 'mask-hexagon-2',
  decagon: 'mask-decagon',
  pentagon: 'mask-pentagon',
  diamond: 'mask-diamond',
  square: 'mask-square',
  circle: 'mask-circle',
  triangle: 'mask-triangle',
  'triangle-2': 'mask-triangle-2',
  'triangle-3': 'mask-triangle-3',
  'triangle-4': 'mask-triangle-4',
}

const ratingClassNames = computed(() => [
  'rating',
  props.size ? SIZE_CLASSES[props.size] : '',
  props.half ? 'rating-half' : '',
])

function maskClass(i: number): string[] {
  const classes = ['mask', MASK_CLASSES[props.mask]]
  if (props.half) {
    classes.push(i % 2 === 1 ? 'mask-half-1' : 'mask-half-2')
  }
  return classes
}

const inputCount = computed(() => (props.half ? props.count * 2 : props.count))
</script>

<template>
  <div :class="ratingClassNames">
    <input
      v-if="hidden"
      type="radio"
      :name="name"
      class="rating-hidden"
      :value="0"
      v-model="model"
    />
    <input
      v-for="i in inputCount"
      :key="i"
      type="radio"
      :name="name"
      :class="maskClass(i)"
      :value="half ? i / 2 : i"
      v-model="model"
    />
  </div>
</template>
