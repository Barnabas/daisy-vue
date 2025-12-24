<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UList from '@/components/UList.vue'
import UListRow from '@/components/UListRow.vue'
import UButton from '@/components/UButton.vue'

const listItems = [
  {
    id: 1,
    avatar: 'avatars/daisy.jpg',
    fullName: 'Daisy Anderson',
    role: 'Product Designer',
    description:
      'Exceeded all quarterly design goals and led the successful redesign of the mobile app. Her innovative approach to user experience has significantly improved customer satisfaction scores.',
  },
  {
    id: 2,
    avatar: 'avatars/emily.jpg',
    fullName: 'Emily Yu',
    role: 'Software Engineer',
    description:
      'Demonstrated exceptional problem-solving skills and quickly became a key contributor to our core platform. She has mentored three junior developers while maintaining outstanding code quality.',
  },
  {
    id: 3,
    avatar: 'avatars/sarah.jpg',
    fullName: 'Sarah Williams',
    role: 'Marketing Manager',
    description:
      'Consistently delivers high-impact campaigns that drive engagement and growth. Her strategic thinking and attention to detail have been instrumental in our recent product launches.',
  },
]
</script>

<template>
  <LayoutDemo id="list">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3>Basic List</h3>
        <UList class="mb-8">
          <UListRow v-for="item in listItems" :key="item.id">
            <div>
              <img :src="item.avatar" alt="Avatar" class="w-12 h-12 rounded-full" />
            </div>
            <div>
              <div class="font-semibold">{{ item.fullName }}</div>
              <div class="text-xs opacity-60 uppercase">{{ item.role }}</div>
            </div>
            <UButton size="sm" shape="square" variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </UButton>
          </UListRow>
        </UList>
      </div>
      <div>
        <h3>Complex List</h3>
        <UList tag="ol" class="mb-8">
          <UListRow v-for="item in listItems" :key="item.id">
            <div class="text-2xl font-bold opacity-20">{{ item.id }}</div>
            <div>
              <img :src="item.avatar" alt="Avatar" class="w-12 h-12 rounded-full" />
            </div>
            <div class="list-col-grow">
              <div class="font-semibold">{{ item.fullName }}</div>
              <div class="text-xs opacity-60 uppercase">{{ item.role }}</div>
            </div>
            <p class="list-col-wrap text-xs">
              {{ item.description }}
            </p>
            <UButton size="sm" shape="square" variant="ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </UButton>
          </UListRow>
        </UList>
      </div>
    </div>
  </LayoutDemo>
</template>
