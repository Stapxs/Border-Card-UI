import App from './App.vue'
import bcui from '../packages/index'

import { createApp } from 'vue'

import '../packages/dist/index.css'
import '../packages/dist/color-light.css'

const app = createApp(App)
app.use(bcui)
app.mount('#app')

export default app
