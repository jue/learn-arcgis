import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    title: 'BIMGO',
    wechat: {
      mp: {
        appid: 'wx696779f3aa33a37f',
      },
    },
  }),
  actions: {
    setTitle(title) {
      this.state.title = title
    },
  },
})
