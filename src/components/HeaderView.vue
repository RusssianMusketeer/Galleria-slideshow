<template>
  <header>
    <nav class="flex items-center justify-between border-b-medium-gray border-b pb-6 md:pb-10">
      <RouterLink to="/" aria-label="HomePage"
        ><MyLogo aria-hidden="true" class="w-[120px] h-[37px] md:w-[170px] md:h-[50px]"
      /></RouterLink>

      <div class="relative">
        <div>
          <Slide :closeOnNavigation="true" right width="130" class="bm-burger-button sm:hidden">
            <RouterLink
              to="/gallery/0/starry-night"
              class="text-white cursor-pointer text-left font-serif font-bold text-[10px] mr-8 transition-colors sm:text-xs md:text-sm hover:text-black"
              >START SLIDESHOW</RouterLink
            >
            <RouterLink
              :to="routingVariable()"
              replace
              class="text-white cursor-pointer text-left font-serif font-bold text-[10px] transition-colors sm:text-xs md:text-sm hover:text-black"
              >{{ userState.email.length > 0 ? 'PROFIL' : 'SIGN IN' }}</RouterLink
            >
          </Slide>
        </div>
        <div class="sm:block hidden">
          <RouterLink
            to="/gallery/0/starry-night"
            class="text-dark-gray text-end font-serif font-bold text-[10px] mr-8 transition-colors sm:text-xs md:text-sm hover:text-black"
            >START SLIDESHOW</RouterLink
          >
          <RouterLink
            :to="routingVariable()"
            replace
            class="text-dark-gray text-end font-serif font-bold text-[10px] transition-colors sm:text-xs md:text-sm hover:text-black"
            >{{ userState.email.length > 0 ? 'PROFIL' : 'SIGN IN' }}</RouterLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MyLogo from '@/assets/shared/logo.svg'
import { useUserStore } from '@/stores/user'
import {Slide} from 'vue3-burger-menu';

const userState = useUserStore()

const routingVariable = ():string => {
  return userState.email.length > 0 ? `/profile/${userState.email}` : '/login'
}
</script>

<style>
.bm-burger-button {
  position: relative !important;
  width: 36px;
  height: 30px;
  left: 0 !important;
  top: 0 !important;
  cursor: default;
}
.bm-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #3f3f41;
  overflow-x: hidden;
  padding-top: 60px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  cursor: default;
}
</style>
