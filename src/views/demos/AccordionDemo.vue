<script setup lang="ts">
import { ref } from 'vue'
import Accordion from '@/components/Accordion.vue'
import AccordionItem from '@/components/AccordionItem.vue'

const singleValue = ref('item-1')
const multipleValue = ref(['item-1'])
const plusIconValue = ref()
</script>

<template>
  <section>
    <h1>Accordion</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h2>Single Type (Arrow Icon)</h2>
        <Accordion type="single" icon="arrow" v-model="singleValue">
          <AccordionItem value="item-1">
            <template #title>Click to open</template>
            <p>This is the content for item 1.</p>
          </AccordionItem>
          <AccordionItem value="item-2">
            <template #title>Click to open</template>
            <p>This is the content for item 2.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h2>Multiple Type (Arrow Icon)</h2>

        <Accordion type="multiple" icon="arrow" v-model="multipleValue">
          <AccordionItem value="item-1">
            <template #title>Click to open</template>
            <p>This is the content for item 1.</p>
          </AccordionItem>
          <AccordionItem value="item-2">
            <template #title>Click to open</template>
            <p>This is the content for item 2.</p>
          </AccordionItem>
          <AccordionItem value="item-3">
            <template #title>Click to open</template>
            <p>This is the content for item 3.</p>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h2>Single Type (Plus Icon)</h2>
        <Accordion type="single" icon="plus" v-model="plusIconValue">
          <AccordionItem value="item-1">
            <template #title>Click to open</template>
            <p>This is the content for item 1.</p>
          </AccordionItem>
          <AccordionItem value="item-2">
            <template #title>Click to open</template>
            <p>This is the content for item 2.</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
</template>
