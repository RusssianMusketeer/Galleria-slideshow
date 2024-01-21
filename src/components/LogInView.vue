<template>
  <section
    class="bg-cover pb-12 h-full w-full relative"
    :style="{ backgroundImage: 'url(' + backgroundPicture + ')' }"
  >
    <div class="flex justify-center h-full items-center">
      <div
        class="max-w-[500px] border-solid border bg-white rounded-xl p-12 text-center w-full flex-col items-center"
      >
        <div>
          <h1 class="font-serif mb-8 opacity-90 name text-2xl md:text-4xl">Sign In</h1>
          <p class="mb-4 text-red-600" v-if="errorValue.generalError">
            Something went wrong ! Please try again
          </p>
          <p class="mb-4 text-red-600" v-else-if="errorValue.authorizationError">
            The email or password you have entered is incorrect
          </p>
        </div>
        <form class="w-full" @submit.prevent="submitForm">
          <div class="flex mb-4 max-w-[400px] w-[100%] flex-col">
            <input
              class="w-[100%] border mb-6 px-2.5 py-2"
              type="text"
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
              Sign In
            </button>
          </div>
          <div>
            <RouterLink to="/register" aria-label="Register">
              <h3 class="mb-4 text-dark-gray hover:text-black cursor-pointer">Create Account</h3>
            </RouterLink>
            <RouterLink to="/password-reset" aria-label="Password reset">
              <h3 class="text-dark-gray hover:text-black cursor-pointer">Forgot your password ?</h3>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import backgroundPicture from '@/assets/brush-background.jpg'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import { reactive } from 'vue'
const userState = useUserStore()

interface IformData {
  email: string
  password: string
}

interface IerrorValue {
  generalError: boolean
  authorizationError: boolean
}

const formData: IformData = reactive({
  email: '',
  password: ''
})

let errorValue: IerrorValue = reactive({
  generalError: false,
  authorizationError: false
})

const submitForm = async (): Promise<void> => {
  try {
    await userState.signIn(formData)
    router.push({
      name: 'profile',
      params: { profile: formData.email }
    })
  } catch (err: any) {
    if (err.message === 'error auth') {
      errorValue.authorizationError = true
    } else {
      errorValue.generalError = true
    }
    console.log(err)
  }
}
</script>
