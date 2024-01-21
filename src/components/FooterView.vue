<template>
  <section class="mt-8">
    <div class="relative bg-black h-px" :style="`width: ${width()}%`" />
    <div
      class="flex border-t border-medium-gray justify-between w-full relative bottom-0 bg-white z-10"
    >
      <div class="py-6">
        <h1 class="font-serif font-bold text-lg">{{ props.imageName }}</h1>
        <p class="text-sm font-serif opacity-75 leading-8">{{ props.artistName }}</p>
      </div>
      <div class="flex items-center">
        <button
          @click="removeCount"
          aria-label="button previous page"
          :disabled="countDisableZero"
          class="mr-8"
        >
          <BackLogo
            :class="['stroke-2', cssDisable(countDisableZero), 'hover:opacity-50', 'transition']"
          />
        </button>
        <button
          @click="addCount"
          aria-label="button next page"
          :disabled="countDisableFourteen"
          :class="[{ 'fill-black-gray': countDisableFourteen }, 'next']"
        >
          <FrontLogo
            :class="[
              'stroke-2',
              cssDisable(countDisableFourteen),
              'hover:opacity-50',
              'transition'
            ]"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BackLogo from '@/assets/shared/icon-back-button.svg'
import FrontLogo from '@/assets/shared/icon-next-button.svg'
import { computed, ref, type ComputedRef, type Ref } from 'vue'
import router from '@/router'
import Images from '@/assets/data.json'

const props = defineProps<{
  artistName: string
  imageName: string
  id: number
}>()

const count: Ref<number> = ref(props.id)

const addCount = (): void => {
  count.value++
  router.push({
    name: 'gallery',
    params: { id: count.value, imageName: Images[count.value].lowerName }
  })
}
const removeCount = (): void => {
  count.value--
  router.push({
    name: 'gallery',
    params: { id: count.value, imageName: Images[count.value].lowerName }
  })
}

const countDisableZero: ComputedRef<boolean> = computed(() => {
  return count.value == 0
})

const countDisableFourteen: ComputedRef<boolean> = computed(() => {
  return count.value == 14
})

const width = (): number => {
  const percentage = ((count.value + 1) / 15) * 100
  return percentage
}

const cssDisable = (functionCss: boolean) => {
  return functionCss ? 'stroke-black-gray' : 'stroke-black'
}
</script>
