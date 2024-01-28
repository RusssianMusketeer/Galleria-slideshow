<template>
  <transition name="fade" mode="out-in">
    <section :key="props.id">
      <section class="flex pt-16 mb-16 xlg:flex-row flex-col">
        <div
          class="relative flex-col sm:flex-row flex-1 xlg:block flex justify-between mb-0 sm:mb-16 xlg:mb-0"
        >
          <div class="relative sm:w-[80%] xlg:w-auto">
            <div class="relative">
              <img
                :src="getImageUrl()"
                :alt="storeState.Images[props.id].name"
                class="w-full max-h-[700px] object-cover xlg:h-[560px] xlg:w-[475px]"
              />
              <button class="block" @click="storeState.toogleSwitch(props.imageName, props.id)">
                <div
                  class="bg-black/[.75] view p-3 flex w-fit absolute left-4 top-4 sm:top-auto sm:bottom-4 items-center hover:bg-white/[.3] transition-colors"
                >
                  <View class="mr-4" />
                  <p class="text-white font-serif text-[12px] tracking-[.25em]">VIEW IMAGE</p>
                </div>
              </button>
            </div>
            <div
              class="absolute bottom-[-2rem] sm:top-0 bg-white px-10 xlg:px-8 pt-8 sm:pt-0 xlg:pt-8 h-fit sm:pb-12 sm:left-[55%] max-w-[400px] md:w-max"
            >
              <h1 class="font-serif opacity-90 name text-2xl md:text-6xl whitespace-break-spaces">
                {{ storeState.Images[props.id].name }}
              </h1>
              <p class="font-serif opacity-100 text-dark-gray text-base whitespace-nowrap sm:mt-4">
                {{ storeState.Images[props.id].artist.name }}
              </p>
            </div>
          </div>
          <div
            class="xlg:flex sm:mt-0 mt-16 relative justify-end xlg:mt-4 xlg:pl-0 sm:pl-8 sm:self-end md:self-center"
          >
            <img
              :src="getArtistImageUrl()"
              :alt="storeState.Images[props.id].artist.name"
              class="w-[90px] extraSm:w-fit"
            />
          </div>
        </div>
        <div class="flex-1 relative">
          <span
            class="absolute xlg:right-0 text-text-gray font-bold font-serif right-0 sm:right-auto text-[100px] sm:text-[200px] leading-[150px]"
            >{{ storeState.Images[props.id].year }}</span
          >
          <div class="mt-28 xlg:ml-auto xlg:mr-28 z-10 w-fit xlg:p-0 md:px-36">
            <p
              class="xlg:max-w-[350px] relative font-serif text-dark-gray text-m leading-[30px] z-10"
            >
              {{ storeState.Images[props.id].description }}
            </p>
            <a
              :href="storeState.Images[props.id].source"
              target="_blank"
              rel="noopener noreferrer"
              class="underline opacity-100 block mt-16 font-serif text-dark-gray hover:text-black transition-colors text-[10px] font-bold"
              >GO TO SOURCE</a
            >
            <div class="mt-8" v-if="userState.email">
              <span
                @click="favoritePainting()"
                class="font-serif name text-lg cursor-pointer text-dark-gray text-[10px] font-bold transition-colors hover:text-black"
                >{{
                  userState.paintings.includes(storeState.Images[props.id].name)
                    ? 'UNFAVORITE'
                    : 'FAVORITE'
                }}</span
              >
            </div>
          </div>
        </div>
      </section>
      <Footer
        :id="Number(props.id)"
        :artistName="storeState.Images[props.id].artist.name"
        :imageName="storeState.Images[props.id].name"
      />
    </section>
  </transition>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/state'
import Footer from '@/components/FooterView.vue'
import View from '@/assets/shared/icon-view-image.svg'
import { useUserStore } from '@/stores/user'

const userState = useUserStore()
const storeState = useStateStore()

const props = defineProps<{
  id: number
  imageName: string
}>()
const getImageUrl = (): string => {
  return new URL(`/src/assets/${props.imageName}/gallery.jpg`, import.meta.url).href
}

const getArtistImageUrl = (): string => {
  return new URL(`/src/assets/${props.imageName}/artist.jpg`, import.meta.url).href
}

const favoritePainting = async (): Promise<void> => {
  try {
    await userState.updatePaintings(userState.id, storeState.Images[props.id].name)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
