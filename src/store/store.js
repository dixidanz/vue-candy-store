import Vue from 'vue'
import Vuex from 'vuex'

import AdminProductModules from '@/store/modules/AdminProduct'
import AdminOrderModules from '@/store/modules/AdminOrder'
import AdminCouponModules from '@/store/modules/AdminCoupon'

import UserProductsModules from '@/store/modules/UserProducts'
import UserCartModules from '@/store/modules/UserCart'
import UserOrderModules from '@/store/modules/UserOrder'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    AdminProductModules,
    AdminOrderModules,
    AdminCouponModules,
    UserProductsModules,
    UserCartModules,
    UserOrderModules
  },
  state: {
    loading: false,
    alert: {
      isAlert: false,
      status: '',
      message: '',
    },
    token: ''
  },
  mutations: {
    updateLoading: (state, status) => {
      state.loading = status
    },
    alertHandler: (state, alert) => {
      state.alert = alert
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    ALERT_SHOW: ({ commit }, payload) => {
      commit('alertHandler', payload)
      setTimeout(() => {
        let temp = {
          isAlert: false
        }
        commit('alertHandler', temp)
      }, 2000)
    },
    ALERT_CLOSE: ({ commit }, payload) => {
      commit('alertHandler', payload)
    },
  }
})
