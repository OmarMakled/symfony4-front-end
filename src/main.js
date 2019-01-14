import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Notification from './components/Notification'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

Vue.component('notification', Notification)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
