import { defineStore } from 'pinia'
import Images from "@/assets/data.json"

export const useStateStore = defineStore({
  id: 'state',
  state: () => ({
    Images,
    toogle: false,
    id : 0,
  }),
  actions: {
      // since we rely on `this`, we cannot use an arrow function
      toogleSwitch (id: number)  {
        this.toogle=!this.toogle
        this.id = id
      },
  }

})
