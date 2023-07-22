<template>
    <section class="mt-8">
    <div class="relative bg-black h-px" :style="`width: ${width()}%`" />
    <div class="flex border-t border-medium-gray justify-between  w-full relative bottom-0 bg-white z-10">
        <div class="py-6">
            <h3 class="font-serif font-bold text-lg">{{ props.imageName }}</h3>
            <p class="text-sm font-serif opacity-75 leading-8">{{ props.artistName }}</p>
        </div>
        <div class="flex items-center"> 
            <button @click="removeCount" :disabled="countDisableZero" class="mr-8">
                <BackLogo :class="['stroke-2', cssDisable(countDisableZero), 'hover:opacity-50', 'transition' ]"/> 
            </button>
            <button @click="addCount" :disabled="countDisableFourteen" :class="{'fill-black-gray' : countDisableFourteen}" >
                <FrontLogo :class="['stroke-2', cssDisable(countDisableFourteen), 'hover:opacity-50', 'transition' ]"/>
            </button>
        </div>
    </div>
    </section>
</template>

<script setup lang="ts">
import BackLogo from '@/assets/shared/icon-back-button.svg'
import FrontLogo from '@/assets/shared/icon-next-button.svg'
import { computed, ref } from 'vue';
import router from '@/router';
import Images from '@/assets/data.json'; 

const props = defineProps<{
  artistName:string,
  imageName:string,
  id:number,
}>()

const count = ref(props.id)

const addCount = () => { 
    count.value++
    router.push({ name: 'gallery', params: {'id': count.value,'imageName': Images[count.value].lowerName }});
}
const removeCount = () => {
    count.value--
    router.push({ name: 'gallery', params: {'id': count.value , 'imageName': Images[count.value].lowerName }});
}

const countDisableZero= computed(() => {
    return count.value == 0
})

const countDisableFourteen = computed(() => {
    return count.value ==14
})

const width = () => {
    const percentage = (count.value +1)/15 * 100
    return percentage
}


const cssDisable = (functionCss: any) => {
    return functionCss ? 'stroke-black-gray' : 'stroke-black'
}


</script>
