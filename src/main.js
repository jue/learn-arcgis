import { createApp } from 'vue'
import './assets/css/main.scss'
import 'element-plus/es/components/message/style/index'
import 'element-plus/es/components/message-box/style/index'

import pinia from './store'

import router from './router/index.js'
import App from './App.vue'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
