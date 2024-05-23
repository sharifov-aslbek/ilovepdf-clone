import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uicomponents from './ui-components/component.js'
const app = createApp(App)
uicomponents.map(component => app.component(component.name, component))
app.use(router)
app.mount('#app')
