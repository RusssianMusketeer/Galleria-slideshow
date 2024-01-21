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
          Reset Password
        </h1>
        <div v-if="submitValue">
          <h1
            class="font-serif mb-8 opacity-90 text-green-600 cursor-default name text-lg md:text-2xl"
          >
            We have e-mailed your password reset link !
          </h1>
          <button
            @click.prevent="goHome()"
            class="text-dark-gray w-full px-6 border-solid border py-2 hover:text-black"
            type="submit"
          >
            Go Home
          </button>
        </div>
        <div v-else>
          <p class="mb-4 text-red-600" v-if="errorValue">
            Sorry that email is not valid! Please try again
          </p>
          <form class="w-full" @submit.prevent="submitForm">
            <div class="flex mb-4 max-w-[400px] w-[100%] flex-col">
              <input
                class="w-[100%] text-dark-gray border border mb-6 px-2.5 py-2"
                type="text"
                placeholder="email"
                v-model="formData.email"
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

interface IformData {
  email: string
}

const userState = useUserStore()
let errorValue: Ref<boolean> = ref(false)
let submitValue: Ref<boolean> = ref(false)

const formData: IformData = reactive({
  email: ''
})

const goHome = (): void => {
  router.push({
    name: 'home'
  })
}

const submitForm = async (): Promise<void> => {
  try {
    await userState.resetPassword(formData)
    submitValue.value = true
  } catch (err) {
    errorValue.value = true
  }
}
</script>
