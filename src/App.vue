<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue';
import { useStateStore } from '@/stores/state'
const storeState = useStateStore();

</script>

<template>
      <div v-if="storeState.toogle" class="bg-black/[.95] w-full h-full absolute z-20">
          <div class="flex justify-center items-center h-screen fixed w-full ">
            <div class="flex flex-col w-fit px-16 ">
            <button class="text-white font-serif text-[12px] w-fit tracking-[.25em] hover:opacity-30 transition self-end mb-6" @click="storeState.toogleSwitch">
            CLOSE
          </button>
            <img :src="/src/ + storeState.Images[storeState.id].images.gallery" >
          </div>
        </div>
        </div>
  <div class="bg-white h-full w-full pr-10 pt-10 pl-10 max-w-screen-xl m-auto">
    <HeaderView/>
    <RouterView />
  </div>
</template>
