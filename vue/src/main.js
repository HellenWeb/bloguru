import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes.js'
import './index.css'

createApp(App)
  .mount('#app')
  .use(routes)
