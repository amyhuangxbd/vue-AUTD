// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import './css/normalize.css'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
const router = new VueRouter({
  routes
})

new Vue({
  router,
  store
}).$mount('#app')
