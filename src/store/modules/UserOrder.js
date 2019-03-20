import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { apiOrderCreate, apiOrderGet, apiOrderPay } from '@/api.js'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    order: {}
  },
  mutations: {
    getOrder: (state, order) => {
      state.order = order
    }
  },
  actions: {
    ORDER_CREATE: ({ commit }, user) => {
      commit('updateLoading', true, { root: true })
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      return new Promise((resolve) => {
        apiOrderCreate({ data: user }).then(res => {
          commit('updateLoading', false, { root: true })
          if (!res.data.success) return false
          resolve(res.data)
        })
      })
    },
    ORDER_GET: ({ commit }, id) => {
      commit('updateLoading', true, { root: true })
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${id}`
      return new Promise((resolve) => {
        apiOrderGet(id).then(res => {
          commit('updateLoading', false, { root: true })
          resolve(res.data)
          commit('getOrder', res.data.order)
        })
      })
    },
    ORDER_PAY: ({ commit, dispatch }, id) => {
      commit('updateLoading', true, { root: true })
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${id}`
      apiOrderPay(id).then(res => {
        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
        dispatch('ORDER_GET', id)
      })
    }
  },
  getters: {
  }
})
