<template>
    <section class="sm:columns-2 lg:columns-3 xlg:columns-4 gap-8 mt-12 pb-12">
        <RouterLink :key="image.name" v-for="image in Images" :to="{ name: 'gallery', params: { id: image.id} }">
            <ImageView  :image="image.images.gallery" :artistName="image.artist.name" :imageName="image.name"/>
        </RouterLink>
   </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ImageView from './ImageView.vue';
import Images from "@/assets/data.json"


</script>
