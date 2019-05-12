import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SkillBundle from './components/SkillBundle'
import Skill from './components/Skill'
import Activity from './components/Activity'
import DialogBox from './components/DialogBox'

Vue.config.productionTip = false

Vue.component('skill-bundle', SkillBundle)
Vue.component('skill', Skill)
Vue.component('activity', Activity)
Vue.component('dialog-box', DialogBox)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    store.dispatch('loadSkillBundles')
  }
}).$mount('#app')
