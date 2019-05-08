import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function findFreeId (array) {
  let start = 1
  array.every(function (a) {
    if (start === a.id) {
      start = a.id + 1
      return true
    }
  })
  return start
}

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
    updateBundleById (state, payload) {
      state.skillBundles.reduce((acc, bundle) => {
        if (bundle.id === payload.id) {
          acc.push(payload)
        } else {
          acc.push(bundle)
        }
      }, [])
    },
    addBundle (state, payload) {
      let newBundle = payload
      newBundle.id = findFreeId(state.skillBundles)
      state.skillBundles.push(newBundle)
      localStorage.setItem('bundles', JSON.stringify(state.skillBundles))
    }
  },
  actions: {
    loadSkillBundles ({ commit }) {
      const savedBundles = JSON.parse(localStorage.getItem('bundles'))
      commit('setSkillBundles', savedBundles)
    },
    addBundle ({ commit }, payload) {
      commit('addBundle', payload)
    }
  }
})
