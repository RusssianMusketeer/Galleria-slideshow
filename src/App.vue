<script setup lang="ts">
import { useStateStore } from '@/stores/state'
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'

const storeState = useStateStore()

function getImageUrl(): string {
  return new URL(`/src/assets/${storeState.name}/gallery.jpg`, import.meta.url).href
}
</script>

<template>
  <div v-if="storeState.toogle" class="w-full h-full absolute z-20">
    <div>
      <div class="flex justify-center items-center h-screen bg-black/[.95] fixed w-full">
        <div class="flex flex-col w-fit px-16">
          <button
            class="text-white close font-serif text-[12px] w-fit tracking-[.25em] hover:opacity-30 transition self-end mb-6"
            @click="storeState.toogleSwitch"
          >
            CLOSE
          </button>
          <img :src="getImageUrl()" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white h-full w-full pr-10 pt-10 pl-10 max-w-screen-xl mx-auto">
    <HeaderView />

    <RouterView />
  </div>
</template>
