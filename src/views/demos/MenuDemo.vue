<script setup lang="ts">
import LayoutDemo from '@/layouts/LayoutDemo.vue'
import UMenu from '@/components/UMenu.vue'
import UMenuItem from '@/components/UMenuItem.vue'
</script>

<template>
  <LayoutDemo id="menu">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      <!-- Basic Menu -->
      <div>
        <h2>Basic Menu</h2>
        <UMenu class="bg-base-200 rounded-box w-56">
          <UMenuItem title="Item 1" />
          <UMenuItem title="Item 2" />
          <UMenuItem title="Item 3" />
        </UMenu>
      </div>

      <!-- Menu with Title -->
      <div>
        <h2>Menu with Title</h2>
        <UMenu title="Navigation" class="bg-base-200 rounded-box w-56">
          <UMenuItem title="Home" />
          <UMenuItem title="About" />
          <UMenuItem title="Contact" />
        </UMenu>
      </div>

      <!-- Active & Disabled States -->
      <div>
        <h2>Active & Disabled States</h2>
        <UMenu class="bg-base-200 rounded-box w-56">
          <UMenuItem title="Normal Item" />
          <UMenuItem title="Active Item" active />
          <UMenuItem title="Disabled Item" disabled />
        </UMenu>
      </div>

      <!-- Nested Menu (Collapsible) -->
      <div>
        <h2>Nested Menu (Collapsible)</h2>
        <UMenu class="bg-base-200 rounded-box w-56">
          <UMenuItem title="Item 1" />
          <UMenuItem title="Parent" collapsible>
            <UMenu>
              <UMenuItem title="Submenu 1" />
              <UMenuItem title="Submenu 2" />
            </UMenu>
          </UMenuItem>
          <UMenuItem title="Item 3" />
        </UMenu>
      </div>

      <!-- Deeply Nested Menu -->
      <div>
        <h2>Deeply Nested Menu</h2>
        <UMenu class="bg-base-200 rounded-box w-56">
          <UMenuItem title="Level 1" collapsible open>
            <UMenu>
              <UMenuItem title="Level 2" collapsible>
                <UMenu>
                  <UMenuItem title="Level 3" collapsible>
                    <UMenu>
                      <UMenuItem title="Level 4 Item" />
                    </UMenu>
                  </UMenuItem>
                </UMenu>
              </UMenuItem>
            </UMenu>
          </UMenuItem>
        </UMenu>
      </div>

      <!-- Horizontal Menu -->
      <div>
        <h2>Horizontal Menu</h2>
        <UMenu direction="horizontal" class="bg-base-200 rounded-box">
          <UMenuItem title="Item 1" />
          <UMenuItem title="Item 2" />
          <UMenuItem title="Item 3" />
        </UMenu>
      </div>

      <!-- Menu Sizes -->
      <div>
        <h2>Menu Sizes</h2>
        <div class="flex flex-col gap-4">
          <UMenu size="xs" class="bg-base-200 rounded-box w-56">
            <UMenuItem title="Extra Small (xs)" />
          </UMenu>
          <UMenu size="sm" class="bg-base-200 rounded-box w-56">
            <UMenuItem title="Small (sm)" />
          </UMenu>
          <UMenu size="md" class="bg-base-200 rounded-box w-56">
            <UMenuItem title="Medium (md)" />
          </UMenu>
          <UMenu size="lg" class="bg-base-200 rounded-box w-56">
            <UMenuItem title="Large (lg)" />
          </UMenu>
          <UMenu size="xl" class="bg-base-200 rounded-box w-56">
            <UMenuItem title="Extra Large (xl)" />
          </UMenu>
        </div>
      </div>

      <!-- Custom Content -->
      <div>
        <h2>Custom Content</h2>
        <UMenu class="bg-base-200 rounded-box w-56">
          <UMenuItem>
            <a class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </a>
          </UMenuItem>
          <UMenuItem>
            <a class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </a>
          </UMenuItem>
          <UMenuItem>
            <a class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Stats
            </a>
          </UMenuItem>
        </UMenu>
      </div>

      <!-- Multiple Titles -->
      <div>
        <h2>Multiple Sections</h2>
        <UMenu class="bg-base-200 rounded-box w-56">
          <li class="menu-title">Section 1</li>
          <UMenuItem title="Item 1" />
          <UMenuItem title="Item 2" />
          <li class="menu-title">Section 2</li>
          <UMenuItem title="Item 3" />
          <UMenuItem title="Item 4" />
        </UMenu>
      </div>
    </div>
  </LayoutDemo>
</template>
