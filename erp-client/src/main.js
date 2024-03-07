import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"
import route from "./router/route"



createApp(App).use(bootstrap).use(route).mount('#app')
