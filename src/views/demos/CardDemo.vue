<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UCard, { type CardSize, type CardBorder } from '@/components/UCard.vue'
import UButton from '@/components/UButton.vue'

const CARD_SIZES: CardSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
const CARD_BORDERS: CardBorder[] = ['border', 'dash']
</script>

<template>
  <LayoutDemo id="card">
    <h3 class="text-lg font-semibold mb-4">Basic Card</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <UCard>
        <template #title>Card Title</template>
        <p>This is a basic card with title and body content.</p>
        <template #actions>
          <UButton>Action</UButton>
        </template>
      </UCard>

      <UCard>
        <p>Card with body only, no title or actions.</p>
      </UCard>
    </div>

    <h3 class="text-lg font-semibold mb-4">Border Styles</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <UCard v-for="border in CARD_BORDERS" :key="border" :border>
        <template #title>{{ border }} border</template>
        <p>Card with {{ border }} border style.</p>
      </UCard>
    </div>

    <h3 class="text-lg font-semibold mb-4">Sizes</h3>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
      <UCard v-for="size in CARD_SIZES" :key="size" :size border="border">
        <template #title>Size: {{ size }}</template>
        <p>Card content</p>
      </UCard>
    </div>

    <h3 class="text-lg font-semibold mb-4">With Figure</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
      <UCard border="border">
        <template #figure>
          <figure>
            <img src="/freya-ingva-6P9JgFe3f9Q-unsplash.jpg" alt="Flowers" />
          </figure>
        </template>
        <template #title>Card with Image</template>
        <p>A card with an image in the figure slot.</p>
        <template #actions>
          <UButton color="primary">Buy Now</UButton>
        </template>
      </UCard>

      <UCard side border="border">
        <template #figure>
          <figure>
            <img
              src="/wellington-carvalho-cava4fCLzAM-unsplash.jpg"
              alt="Flowers"
              class="h-full object-cover"
            />
          </figure>
        </template>
        <template #title>Side Layout</template>
        <p>Card with side layout - image on the left.</p>
        <template #actions>
          <UButton color="primary">Watch</UButton>
        </template>
      </UCard>
    </div>

    <h3 class="text-lg font-semibold mb-4">Image Full</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <UCard image-full>
        <template #figure>
          <figure>
            <img src="/freya-ingva-6P9JgFe3f9Q-unsplash.jpg" alt="Flower" />
          </figure>
        </template>
        <template #title>Image as Background</template>
        <p>The image fills the entire card background.</p>
        <template #actions>
          <UButton color="primary">Buy Now</UButton>
        </template>
      </UCard>
    </div>
  </LayoutDemo>
</template>
