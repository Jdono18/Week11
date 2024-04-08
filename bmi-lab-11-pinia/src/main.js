import { createApp } from 'vue'  // sets up vue
import { createPinia } from 'pinia'  // sets up pinia

import './style.css'  // imports Css styles
import App from './App.vue'  // sets parent vue component


// create app then mount all in one line


//createApp(App).mount('#app')


// create app...
const app = createApp(App)

// .. configure app to use pinia store that multiple components can use to share data
const pinia = createPinia()
app.use(pinia)

// .. mount (load) configured app in browser
app.mount('#app')
