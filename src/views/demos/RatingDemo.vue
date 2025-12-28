<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import URating, { type RatingSize, type RatingMask } from '@/components/URating.vue'

const RATING_SIZES: RatingSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
const RATING_MASKS: RatingMask[] = ['star', 'star-2', 'heart', 'diamond', 'circle', 'hexagon']

const rating = ref(3)
const halfRating = ref(2.5)
const clearableRating = ref(0)
</script>

<template>
  <LayoutDemo id="rating">
    <div class="my-4">
      <h3 class="mb-2">Basic Rating with v-model</h3>
      <div class="flex flex-col gap-2">
        <URating v-model="rating" name="basic-rating" />
        <span>Rating: {{ rating }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3>Half Stars</h3>
      <div class="flex flex-col gap-2">
        <URating v-model="halfRating" name="half-rating" half />
        <span>Rating: {{ halfRating }}</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Clearable (with hidden option)</h3>
      <div class="flex flex-col gap-2">
        <URating v-model="clearableRating" name="clearable-rating" hidden />
        <span>Rating: {{ clearableRating }} (click selected star to clear)</span>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Sizes</h3>
      <div class="flex flex-col gap-2">
        <div v-for="size in RATING_SIZES" :key="size" class="flex items-center gap-2">
          <URating :name="`size-${size}`" :size="size" :model-value="3" />
          <span>{{ size }}</span>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Different Masks</h3>
      <div class="flex flex-col gap-2">
        <div v-for="mask in RATING_MASKS" :key="mask" class="flex items-center gap-2">
          <URating :name="`mask-${mask}`" :mask="mask" :model-value="3" />
          <span>{{ mask }}</span>
        </div>
      </div>
    </div>

    <div class="my-4">
      <h3 class="mb-2">Custom Count</h3>
      <div class="flex flex-col gap-2">
        <URating name="count-10" :count="10" :model-value="7" />
        <span>10 stars</span>
      </div>
    </div>
  </LayoutDemo>
</template>
