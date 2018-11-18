import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  strict: true,
  namespaced: true,
  state: {
  },
  mutations: {
  },
  actions: {
    ORDER_CREATE: ({ commit }, user) => {
      commit('updateLoading', true, { root: true })
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      axios.post(api, { data: user }).then(res => {
        console.log(res.data)

        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
      })
    }
  },
  getters: {
  }
})
