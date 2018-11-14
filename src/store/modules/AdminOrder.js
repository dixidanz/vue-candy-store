import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  strict: true,
  namespaced: true,
  state: {
    orders: [],
    pagination: {},
  },
  mutations: {
    getOrder: (state, order) => {
      state.order = order
    },
    getPagination: (state, pagination) => {
      state.pagination = pagination
    },
  },
  actions: {
    ORDER_GET: ({ commit }, page = 1) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      commit('updateLoading', true, { root: true })
      axios.get(api).then(res => {
        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
        commit('getOrder', res.data.orders)
        commit('getPagination', res.data.pagination)
      })
    }
  },
  getters: {
    orders: state => {
      return state.orders
    },
    pagination: state => {
      return state.pagination
    }
  }
})
