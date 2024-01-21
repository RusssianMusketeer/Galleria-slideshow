<template>
  <section
    class="bg-cover pb-12 h-full w-full relative"
    :style="{ backgroundImage: 'url(' + backgroundPicture + ')' }"
  >
    <div class="flex justify-center h-full items-center">
      <div
        class="max-w-[500px] max-h-[400px] border-solid border bg-white rounded-xl p-12 text-center w-full flex-col items-center"
      >
        <h1 class="font-serif mb-8 opacity-90 name cursor-default text-2xl md:text-4xl">
          Password reset
        </h1>
        <form class="w-full" @submit.prevent="submitForm" v-if="checkValue && !submitValue">
          <div class="flex mb-4 max-w-[400px] w-[100%] flex-col">
            <input
              class="w-[100%] text-dark-gray border border mb-6 px-2.5 py-2"
              type="text"
              placeholder="password"
              v-model="formData.password"
              required
            />

            <button
              class="text-dark-gray px-6 border-solid border py-2 hover:text-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div v-else-if="submitValue && checkValue">
          <h1
            class="font-serif mb-8 opacity-90 text-green-600 cursor-default name text-lg md:text-2xl"
          >
            Your password has been successfully changed!
          </h1>
          <button
            @click.prevent="goLogin()"
            class="text-dark-gray w-full px-6 border-solid border py-2 hover:text-black"
            type="button"
          >
            Go to Login
          </button>
        </div>
        <div v-else>
          <h1
            class="font-serif mb-8 opacity-90 text-green-600 cursor-default name text-lg md:text-2xl"
          >
            There has been an error, please try to again!
          </h1>
          <button
            @click.prevent="goHome()"
            class="text-dark-gray w-full px-6 border-solid border py-2 hover:text-black"
            type="button"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundPicture from '@/assets/brush-background.jpg'
import { reactive, ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import { onBeforeMount } from 'vue'

const props = defineProps<{
  token: string
}>()

interface IformData {
  password: string
}

const formData: IformData = reactive({
  password: ''
})

const userState = useUserStore()
let submitValue: Ref<boolean> = ref(false)
let checkValue: Ref<boolean> = ref(false)

const goHome = (): void => {
  router.push({
    name: 'home'
  })
}

const goLogin = (): void => {
  router.push({
    name: 'login'
  })
}

onBeforeMount(async () => {
  try {
    await userState.checkPassword(props.token)
    checkValue.value = true
  } catch (err) {
    console.log(err, 'error')
  }
})

const submitForm = async (): Promise<void> => {
  try {
    await userState.updatePassword(formData)
    submitValue.value = true
  } catch (err) {
    console.log(err)
  }
}
</script>
