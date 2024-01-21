<template>
  <section>
    <div
      class="flex justify-center h-full items-center flex-col mt-20 text-dark-gray text-end font-serif gap-8 font-bold text-2xl"
    >
      <h1 class="cursor-default">404 error, Page not found</h1>
      <p class="cursor-default">It seems the page your are looking for does not exist</p>
      <button @click.prevent="goHome()" class="transition-colors hover:text-black">Go Home</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import router from '@/router'
const goHome = (): void => {
  router.push({
    name: 'home'
  })
}
</script>
