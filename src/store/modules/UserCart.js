import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  strict: true,
  namespaced: true,
  state: {
    loadingItem: '',
    carts: [],
  },
  mutations: {
    updateLoadingItem(state, id) {
      state.loadingItem = id
    },
    getCarts(state, carts) {
      state.carts = carts
    }
  },
  actions: {
    CARTS_GET: ({ commit }) => {
      commit('updateLoading', true, { root: true })
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(api).then(res => {
        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
        commit('getCarts', res.data.data.carts)
      })
    },
    CART_ADD: ({ commit, dispatch }, cart) => {
      commit('updateLoadingItem', cart.product_id)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.post(api, { data: cart }).then(res => {
        commit('updateLoadingItem', '')
        if (!res.data.success) return false
      })
    }
  },
  getters: {

  }
})
