import { createPinia } from 'pinia'

const store = createPinia()

export { store }

export * from './modules/user'
export * from './modules/settings'

export default store
