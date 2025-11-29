import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入Element Plus样式
import 'element-plus/dist/index.css'
// 引入全局样式（稍后创建）
import '@/styles/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
