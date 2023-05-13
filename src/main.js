import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'

import axios from "axios"

axios.defaults.baseURL = 'https://api.laradevtest.com'
axios.defaults.withCredentials = true
axios.defaults.headers.common['Accept'] = 'Application/json'

axios.get('sanctum/csrf-cookie')

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')