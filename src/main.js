import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { dollarFilter } from './filters'
import router from '@/routes'
import { percentFilter } from './filters'
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
