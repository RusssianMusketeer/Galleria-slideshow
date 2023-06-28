<template>
    <div class="mb-8 relative">
        <img :src="imageUrl" class="brightness-75"/>
          <div class="absolute z-10 bottom-6 left-8">
            <h2 class="font-bold font-serif text-white text-2xl">{{ imageName }}</h2>
            <p class="font-serif text-white text-sm opacity-75">{{ artistName }}</p>
          </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string,
  artistName:string,
  imageName:string,
}>()

const imageUrl = new URL("/src/" + props.image, import.meta.url).href
</script>

