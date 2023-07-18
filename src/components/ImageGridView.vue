<template>
    <section class="sm:columns-2 lg:columns-3 xlg:columns-4 gap-8 mt-8 md:mt-12 pb-12">
        <RouterLink :key="image.name" v-for="image in Images" :to="{ name: 'gallery', params: { id: image.id} }">
            <ImageView  :image="image.images.gallery" :artistName="image.artist.name" :imageName="image.name" class=" hover:shadow-[20px_20px_30px_0px_rgba(0,0,0,0.5)] hover:opacity-80 transition-opacity transition-shadow"/>
        </RouterLink>
   </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ImageView from './ImageView.vue';
import Images from "@/assets/data.json"
</script>

<style scoped>
.card {
  /* the other rules */
  transition: opacity 0.3s, box-shadow 0.3s;
}
.card:hover {
  box-shadow: 30px 30px 40px 0px rgba(0,0,0,0.5);
  opacity: 0.8
}
</style>
