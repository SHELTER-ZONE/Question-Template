import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')


router.afterEach(()=>{
    window.scrollTo(0, 0)
})