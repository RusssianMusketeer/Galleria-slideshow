<template>
  <section
    class="bg-cover pb-12 h-full w-full relative"
    :style="{ backgroundImage: 'url(' + backgroundPicture + ')' }"
  >
    <div class="flex justify-center h-full items-center">
      <div
        class="max-w-[500px] max-h-[400px] border-solid border bg-white rounded-xl p-12 text-center w-full flex-col items-center"
      >
        <div>
          <h1 class="font-serif mb-8 opacity-90 name text-2xl md:text-4xl">Register</h1>
          <p class="mb-4 text-red-600" v-if="errorValue">Something went wrong ! Please try again</p>
        </div>
        <form class="w-full" @submit.prevent="submitForm">
          <div class="flex mb-4 max-w-[400px] w-[100%] flex-col">
            <input
              class="w-[100%] border mb-6 px-2.5 py-2"
              type="email"
              placeholder="Email"
              required
              v-model="formData.email"
            />
            <input
              class="w-[100%] text-dark-gray border border mb-6 px-2.5 py-2"
              type="text"
              placeholder="Password"
              required
              v-model="formData.password"
            />

            <button
              class="text-dark-gray px-6 border-solid border py-2 hover:text-black"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundPicture from '@/assets/brush-background.jpg'
import router from '@/router'
import { reactive, ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/user'

interface IformData {
  email: string
  password: string
}

const userState = useUserStore()

const formData: IformData = reactive({
  email: '',
  password: ''
})

let errorValue: Ref<boolean> = ref(false)

const submitForm = async (): Promise<void> => {
  try {
    await userState.signUp(formData)
    router.push({
      name: 'profile',
      params: { profile: formData.email }
    })
  } catch (err) {
    errorValue.value = true
  }
}
</script>
