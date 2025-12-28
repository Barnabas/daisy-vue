<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UTimeline from '@/components/UTimeline.vue'
import UTimelineItem from '@/components/UTimelineItem.vue'

const events = [
  {
    year: '1984',
    title: 'First Macintosh computer',
    description:
      'The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer.',
  },
  {
    year: '1998',
    title: 'iMac',
    description:
      'iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc.',
  },
  {
    year: '2001',
    title: 'iPod',
    description:
      'The iPod is a discontinued series of portable media players and multi-purpose mobile devices.',
  },
  {
    year: '2007',
    title: 'iPhone',
    description:
      "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
  },
  {
    year: '2015',
    title: 'Apple Watch',
    description: 'The Apple Watch is a line of smartwatches produced by Apple Inc.',
  },
]
</script>

<template>
  <LayoutDemo id="timeline">
    <div class="space-y-12">
      <div>
        <h3>Basic Timeline (Vertical)</h3>
        <UTimeline>
          <UTimelineItem v-for="(event, index) in events" :key="index">
            <template #start>
              <span class="font-mono italic">{{ event.year }}</span>
            </template>
            <template #end>
              <div class="font-black">{{ event.title }}</div>
            </template>
          </UTimelineItem>
        </UTimeline>
      </div>

      <div>
        <h3>Timeline with Box Style</h3>
        <UTimeline>
          <UTimelineItem v-for="(event, index) in events" :key="index" box>
            <template #start>
              <span class="font-mono italic">{{ event.year }}</span>
            </template>
            <template #end>
              <div class="font-black">{{ event.title }}</div>
              <p class="text-sm">{{ event.description }}</p>
            </template>
          </UTimelineItem>
        </UTimeline>
      </div>

      <div>
        <h3>Compact Timeline</h3>
        <UTimeline compact>
          <UTimelineItem v-for="(event, index) in events" :key="index" box>
            <template #end>
              <time class="font-mono italic">{{ event.year }}</time>
              <div class="font-black">{{ event.title }}</div>
              <p class="text-sm">{{ event.description }}</p>
            </template>
          </UTimelineItem>
        </UTimeline>
      </div>

      <div>
        <h3>Horizontal Timeline</h3>
        <div class="overflow-x-auto">
          <UTimeline direction="horizontal">
            <UTimelineItem v-for="(event, index) in events" :key="index" box>
              <template #start>
                <span class="font-mono italic">{{ event.year }}</span>
              </template>
              <template #end>
                <div class="font-black">{{ event.title }}</div>
              </template>
            </UTimelineItem>
          </UTimeline>
        </div>
      </div>

      <div>
        <h3>Responsive Timeline</h3>
        <div class="overflow-x-auto">
          <UTimeline direction="responsive">
            <UTimelineItem v-for="(event, index) in events" :key="index" box>
              <template #start>
                <span class="font-mono italic">{{ event.year }}</span>
              </template>
              <template #end>
                <div class="font-black">{{ event.title }}</div>
              </template>
            </UTimelineItem>
          </UTimeline>
        </div>
      </div>

      <div>
        <h3>Timeline with Custom Icons</h3>
        <UTimeline>
          <UTimelineItem v-for="(event, index) in events" :key="index" box>
            <template #start>
              <span class="font-mono italic">{{ event.year }}</span>
            </template>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5 text-primary"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>

            <template #end>
              <div class="font-black">{{ event.title }}</div>
            </template>
          </UTimelineItem>
        </UTimeline>
      </div>

      <div>
        <h3>Snapped Icons Timeline</h3>
        <UTimeline snap>
          <UTimelineItem v-for="(event, index) in events" :key="index" box>
            <template #start>
              <span class="font-mono italic">{{ event.year }}</span>
            </template>
            <template #end>
              <div class="font-black">{{ event.title }}</div>
              <p class="text-sm">{{ event.description }}</p>
            </template>
          </UTimelineItem>
        </UTimeline>
      </div>
    </div>
  </LayoutDemo>
</template>
