<template>
  <section class="bg-cover pb-12 h-full w-full relative">
    <div class="flex justify-between mt-8">
      <div>
        <h1 class="font-serif mb-12 opacity-90 name text-3xl">User Profile</h1>
        <h1 class="font-serif mb-4 opacity-90 name text-xl">Email: {{ userState.email }}</h1>
        <h1 class="font-serif mb-4 opacity-90 name text-xl">
          Password: {{ userState.password.replace(/./g, '*') }}
        </h1>
        <span
          @click="logoutUser"
          class="text-dark-gray text-end font-serif font-bold cursor-pointer transition-colors mt-12 hover:text-black"
          >Sign Out</span
        >
      </div>

      <div class="w-full flex items-center flex-col">
        <h1 class="font-serif opacity-90 name text-3xl mb-8">Favorited Paintings</h1>
        <div class="flex flex-wrap columns-3 justify-center gap-8">
          <div v-for="painting in filteredPaintings" :key="painting.id" class="flex h-fit">
            <RouterLink
              :to="{ name: 'gallery', params: { id: painting.id, imageName: painting.lowerName } }"
            >
              <ImageView
                :lowerName="painting.lowerName"
                :artistName="painting.artist.name"
                :imageName="painting.name"
                class="hover:shadow-[20px_20px_30px_0px_rgba(0,0,0,0.5)] max-w-[300px] h-fit hover:opacity-80 transition-opacity transition-shadow"
              />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import ImageView from './ImageView.vue'
import { useStateStore } from '@/stores/state'
import router from '@/router'

const storeState = useStateStore()
const userState = useUserStore()

let filteredPaintings = storeState.Images.filter((painting) => {
  return userState.paintings.includes(painting.name)
})
const logoutUser = async (): Promise<void> => {
  try {
    await userState.logout()
    router.push({
      name: 'home'
    })
  } catch (err) {
    console.log(err)
  }
}
</script>
