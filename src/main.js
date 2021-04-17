import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../public/css/base.css'
import '../public/css/reset.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
