<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UStats, { type StatsDirection } from '@/components/UStats.vue'
import UStat from '@/components/UStat.vue'
import UButton from '@/components/UButton.vue'

const DIRECTIONS: StatsDirection[] = ['horizontal', 'vertical', 'responsive']
</script>

<template>
  <LayoutDemo id="stat">
    <h3>Basic Stats (Simple Props)</h3>
    <UStats class="mb-8 bg-base-200">
      <UStat title="Total Page Views" value="89,400" />
      <UStat title="New Users" value="4,200" desc="↗︎ 400 (22%)" />
      <UStat title="New Registers" value="1,200" desc="↘︎ 90 (14%)" />
    </UStats>

    <h3>Stats with Slots</h3>
    <UStats class="mb-8">
      <UStat>
        <template #title>Downloads</template>
        <template #value>
          <span class="text-primary">31K</span>
        </template>
        <template #desc>Jan 1st - Feb 1st</template>
      </UStat>

      <UStat>
        <template #title>Total Sales</template>
        <template #value>
          <span class="text-secondary">4,200</span>
        </template>
        <template #desc>↗︎ 400 (22%)</template>
      </UStat>

      <UStat>
        <template #title>Tasks done</template>
        <template #value>
          <span class="text-accent">31%</span>
        </template>
        <template #desc>↘︎ 90 (14%)</template>
      </UStat>
    </UStats>

    <h3>Stats with Figure Icons</h3>
    <UStats class="mb-8">
      <UStat>
        <template #figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </template>
        <template #title>Downloads</template>
        <template #value>31K</template>
        <template #desc>Jan 1st - Feb 1st</template>
      </UStat>

      <UStat>
        <template #figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </template>
        <template #title>New Users</template>
        <template #value>4,200</template>
        <template #desc>↗︎ 400 (22%)</template>
      </UStat>

      <UStat>
        <template #figure>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </template>
        <template #title>New Registers</template>
        <template #value>1,200</template>
        <template #desc>↘︎ 90 (14%)</template>
      </UStat>
    </UStats>

    <h3>Centered Stat</h3>
    <UStats class="mb-8">
      <UStat centered title="Account balance" value="$89,400" desc="↗︎ 5,000 (6%)" />
    </UStats>

    <h3>Stat with Actions</h3>
    <UStats class="mb-8">
      <UStat>
        <template #title>My Balance</template>
        <template #value>$89,400</template>
        <template #actions>
          <UButton color="primary" size="sm">Add funds</UButton>
        </template>
      </UStat>
    </UStats>

    <h3>Directions</h3>
    <div class="space-y-8">
      <div v-for="direction in DIRECTIONS" :key="direction">
        <h4 class="capitalize">{{ direction }}</h4>
        <UStats :direction shadow>
          <UStat title="Total Views" value="89,400" />
          <UStat title="Active Users" value="4,200" desc="↗︎ 400 (22%)" />
          <UStat title="Conversions" value="1,200" desc="↘︎ 90 (14%)" />
        </UStats>
      </div>
    </div>
  </LayoutDemo>
</template>
