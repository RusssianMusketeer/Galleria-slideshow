<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue';

</script>

<template>
  <div class="bg-white h-screen w-screen p-10 max-w-screen-xl m-auto">
    <HeaderView/>
    <RouterView />
  </div>
</template>
