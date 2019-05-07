import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SkillBundle from './components/SkillBundle'

Vue.config.productionTip = false

Vue.component('skill-bundle', SkillBundle)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
