import { defineStore } from 'pinia'
import Images from '@/assets/data.json'

export const useStateStore = defineStore({
  id: 'state',
  state: () => ({
    Images,
    toogle: false,
    id: 0,
    name: ''
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    toogleSwitch(name: string, id: number): void {
      this.toogle = !this.toogle
      this.id = id
      this.name = name
    }
  }
})
