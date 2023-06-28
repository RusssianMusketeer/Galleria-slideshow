import { defineStore } from 'pinia'
import Images from "@/assets/data.json"

export const useStateStore = defineStore({
  id: 'state',
  state: () => ({
    Images
  })
})
