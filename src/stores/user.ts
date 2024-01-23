import { defineStore } from 'pinia'
import axios from 'axios'

export interface User {
  email: string
  password: string
  paintings: string[]
  id: number | null
  token: string
}

const apiUrl = VUE_APP_API_URL

export const useUserStore = defineStore({
  id: 'user',
  state: () =>
    ({
      email: '',
      password: '',
      id: null,
      paintings: [],
      token: ''
    } as User),
  actions: {
    async signIn(formData: any) {
      try {
        console.log(apiUrl, process.env.VUE_APP_API_URL, 'response')
        const response = await axios.post(`${apiUrl}/login`, formData)
        console.log(apiUrl, 'response')
        this.id = response.data.user.id
        this.token = response.data.token
        const responsePaintings = await axios.get(`${apiUrl}/paintings`, {
          headers: {
            authorization: this.token
          },
          params: {
            id: this.id
          }
        })
        this.email = response.data.user.email
        this.password = response.data.user.password
        if (Object.keys(responsePaintings.data).length != 0) {
          this.paintings = responsePaintings.data.paintings.paintings
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          throw new Error('error auth')
        } else {
          throw new Error('error gen')
        }
      }
    },
    async signUp(formData: any) {
      try {
        const response = await axios.post(`${apiUrl}/register`, formData)
        this.id = response.data.insertId
        await this.favoritePainting(this.id)

        this.email = formData.email
        this.password = formData.password
      } catch (error) {
        console.log(error)
        throw new Error('error register')
      }
    },
    async resetPassword(formData: any) {
      try {
        await axios.post(`${apiUrl}/reset`, formData)
      } catch (error) {
        console.log(error)
        throw new Error('error reseting password')
      }
    },
    async checkPassword(token: string) {
      try {
        const response = await axios.get(`${apiUrl}/reset/${token}`)
        this.id = response.data.id
        this.email = response.data.email
        this.password = response.data.password
      } catch (error) {
        console.log(error)
        throw new Error('error with token')
      }
    },
    async updatePassword(formData: any) {
      try {
        await axios.put(`${apiUrl}/reset`, {
          password: formData.password,
          id: this.id,
          email: this.email
        })
      } catch (error) {
        console.log(error)
        throw new Error('error reseting password')
      }
    },
    async retrivePaintings(info: any) {
      try {
        const response = await axios.get(`${apiUrl}/paintings`, info)
        console.log(response, 'response')
      } catch (error) {
        console.log(error, 'error')
      }
    },
    async favoritePainting(userId: number | null) {
      try {
        const response = await axios.post(`${apiUrl}/paintings`, {
          userId: userId,
          paintings: []
        })
        console.log(response, 'response')
      } catch (error) {
        console.log(error, 'error')
      }
    },
    async updatePaintings(userId: number | null, painting: string) {
      this.paintings.includes(painting)
        ? (this.paintings = this.paintings.filter((element) => element !== painting))
        : this.paintings.push(painting)
      console.log(this.token, 'TOKENNNN')
      try {
        const response = await axios.put(
          `${apiUrl}/paintings`,
          {
            userId: userId,
            email: this.email,
            paintings: this.paintings
          },
          {
            headers: {
              Authorization: this.token
            }
          }
        )
        console.log(response, 'response')
      } catch (error) {
        console.log(error, 'error')
      }
    },
    async logout() {
      try {
        await axios.get(`${apiUrl}/logout`)
        ;(this.email = ''), (this.password = ''), (this.id = null), (this.paintings = [])
      } catch (error) {
        console.log(error)
      }
    }
  }
})
