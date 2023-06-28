<template>
    <section class="flex pt-8">
        <div class="relative  flex-1">
            <img :src="/src/ + storeState.Images[props.id].images.gallery" class=" object-cover h-[560px] w-[475px]">
            <div class="absolute top-0 bg-white pl-8 pb-16 left-[60%] max-w-[400px] w-max">
                <h1 class="font-serif text-6xl whitespace-break-spaces">{{ storeState.Images[props.id].name }}</h1>
                <p class="font-serif text-dark-gray text-base whitespace-nowrap mt-4"> {{ storeState.Images[props.id].artist.name }}</p>
            </div>
            
        </div>
        <div class="flex-1 relative">
            <span class=" absolute right-0 text-light-gray font-bold font-serif text-[200px] leading-[150px]">{{ storeState.Images[props.id].year }}</span>
            <p class="max-w-[350px] relative mt-28 ml-auto mr-16 font-bold text-dark-gray text-m leading-[30px] z-10">{{ storeState.Images[props.id].description }}</p>
        </div>

    </section>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state'

const storeState = useStateStore();

const props = defineProps<{
  id: number,
}>()

</script>
