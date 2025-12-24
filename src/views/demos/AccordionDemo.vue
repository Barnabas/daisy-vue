<script setup lang="ts">
import { ref } from 'vue'
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UAccordion from '@/components/UAccordion.vue'
import UAccordionItem from '@/components/UAccordionItem.vue'

const singleValue = ref('item-1')
const multipleValue = ref(['item-1'])
const plusIconValue = ref()
</script>

<template>
  <LayoutDemo id="accordion">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h2>Single Type</h2>
        <UAccordion type="single" v-model="singleValue">
          <UAccordionItem value="item-1" title="First Item">
            <p>This is the content for item 1.</p>
          </UAccordionItem>
          <UAccordionItem value="item-2" title="Second Item">
            <p>This is the content for item 2.</p>
          </UAccordionItem>
        </UAccordion>
      </div>

      <div>
        <h2>Multiple Type</h2>

        <UAccordion type="multiple" icon="arrow" v-model="multipleValue">
          <UAccordionItem value="item-1">
            <template #title>Open Item 1</template>
            <p>This is the content for item 1.</p>
          </UAccordionItem>
          <UAccordionItem value="item-2">
            <template #title>Open Item 2</template>
            <p>This is the content for item 2.</p>
          </UAccordionItem>
          <UAccordionItem value="item-3">
            <template #title>Open Item 3</template>
            <p>This is the content for item 3.</p>
          </UAccordionItem>
        </UAccordion>
      </div>

      <div>
        <h2>Plus Icon</h2>
        <UAccordion type="single" icon="plus" v-model="plusIconValue">
          <UAccordionItem value="item-1" title="First Item">
            <p>This is the content for item 1.</p>
          </UAccordionItem>
          <UAccordionItem value="item-2" title="Second Item">
            <p>This is the content for item 2.</p>
          </UAccordionItem>
        </UAccordion>
      </div>
    </div>
  </LayoutDemo>
</template>
