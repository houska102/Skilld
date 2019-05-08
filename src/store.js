import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skillBundles: [
      {
        id: 1,
        name: 'Running',
        skills: [
          {
            id: 1,
            name: 'Actual Running',
            activities: [
              { id: 1, date: '26-1-2019', time: 0.5 },
              { id: 2, date: '30-1-2019', time: 0.5 }
            ]
          },
          {
            id: 2,
            name: 'Training for Running',
            activities: [
              { id: 1, date: '5-2-2019', time: 0.5 }
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
    setSkillBundles (state, payload) {
      state.skillBundles = payload
    },
    setBundleById (state, payload) {
      state.skillBundles.reduce((acc, bundle) => {
        if(bundle.id === payload.id){
          acc.push(payload)
        } else {
          acc.push(bundle)
        }
      }, [])
    }
  },
  actions: {

  }
})
