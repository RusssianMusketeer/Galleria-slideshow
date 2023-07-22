<template>
    <div class="mb-8 relative">
        <img :src="getImageUrl()" class="brightness-75"/>
          <div class="absolute z-10 bottom-6 left-8">
            <h2 class="font-bold font-serif text-white text-lg extraSm:text-2xl">{{ imageName }}</h2>
            <p class="font-serif text-white text-xs extraSm:text-sm opacity-75">{{ artistName }}</p>
          </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lowerName:string,
  artistName:string,
  imageName:string,
}>()

function getImageUrl() {
  return new URL(`/src/assets/${props.lowerName}/gallery.jpg`, import.meta.url).href
}

</script>


