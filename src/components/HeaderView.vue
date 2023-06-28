<template>
  <header>
      <nav class="flex items-center justify-between border-b-medium-gray border-b pb-10">
        <RouterLink to="/"><MyLogo class=""/></RouterLink>
        <RouterLink to="/gallery/0" class="text-dark-gray font-serif font-bold text-sm hover:text-black">START SLIDESHOW</RouterLink>
      </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MyLogo from '@/assets/shared/logo.svg'
</script>
