import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from '@chenfengyuan/vue-carousel'

createApp(App).use(store).use(router).component(VueCarousel.name, VueCarousel).mount('#app')
