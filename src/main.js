import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue)

Vue.use(VueRouter)

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
