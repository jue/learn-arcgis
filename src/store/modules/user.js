import { defineStore } from 'pinia'

export const useUserStore = defineStore('token', {
  state: () => ({
    type: 'vue3',
    token: 'aa--00',
    user: null,
  }),
  actions: {
    async userLogin(params) {
      try {
        const { data: res } = await http.post('/user/login/password', {
          ...params,
          platform: 'web',
        })

        if (res.code === 200) {
          this.token = res.data.token
          // this.token(res.data.token)
          setToken(res.data.token)
          this.userInfo()
        }

        return res
      }
      catch (error) {
        return error
      }
    },

    async userInfo() {
      const { data: res } = await http.post('/user/info')
      if (res.code === 200)
        this.user = res.data

      return res
    },
  },
})
