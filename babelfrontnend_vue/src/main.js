import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createStore } from 'vuex';
import VueCarousel from 'vue-carousel';


createApp(App).use(store).use(router).mount('#app')
