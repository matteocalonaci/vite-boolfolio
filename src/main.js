import { createApp } from 'vue'
import { router } from './router'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
