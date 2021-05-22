import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const Vue = createApp(App)
Vue
  .use(router)
  .mount('#app')
