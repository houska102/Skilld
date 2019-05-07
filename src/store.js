import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skillBundles: [
      {
        name: 'Running',
        skills: [
          {
            name: 'Actual Running',
            activities: [
              { date: '26-1-2019', time: 0.5 },
              { date: '30-1-2019', time: 0.5 }
            ]
          },
          {
            name: 'Training for Running',
            activities: [
              { date: '5-2-2019', time: 0.5 }
            ]
          }
        ]
      }
    ]
  },
  getters: {
    skillBundles (state) {
      return state.skillBundles
    }
  },
  mutations: {

  },
  actions: {

  }
})
