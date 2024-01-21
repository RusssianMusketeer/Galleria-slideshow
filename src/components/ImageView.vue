<template>
  <div class="relative">
    <img :src="getImageUrl()" :alt="props.imageName + ' link'" class="brightness-70" />
    <div class="absolute z-10 bottom-6 left-8">
      <span class="font-bold font-serif text-white text-lg extraSm:text-2xl brightness-100">{{
        imageName
      }}</span>
      <p class="font-serif text-white text-xs extraSm:text-sm opacity-75">{{ artistName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lowerName: string
  artistName: string
  imageName: string
}>()

function getImageUrl() {
  return new URL(`/src/assets/${props.lowerName}/gallery.jpg`, import.meta.url).href
}
</script>
