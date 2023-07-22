<template>
  <header>
      <nav class="flex items-center justify-between border-b-medium-gray border-b pb-6 md:pb-10">
        <RouterLink to="/"><MyLogo class="w-[120px] h-[37px] md:w-[170px] md:h-[50px]"/></RouterLink>
        <RouterLink to="/gallery/0/starry-night" class="text-dark-gray text-end font-serif font-bold text-[10px] transition-colors sm:text-xs md:text-sm hover:text-black">START SLIDESHOW</RouterLink>
      </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MyLogo from '@/assets/shared/logo.svg'
</script>
