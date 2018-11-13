import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    pagination: {},
    loading: false,
    alert: {
      isAlert: false,
      status: '',
      message: '',
    }
  },
  mutations: {
    getProduct: (state, products) => {
      state.products = products
    },
    getPagination: (state, pagination) => {
      state.pagination = pagination
    },
    updateLoading: (state, status) => {
      state.loading = status
    },
    alertHandler: (state, alert) => {
      state.alert = alert
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
    PRODUCTS_GET: ({ commit }, page = 1) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      commit('updateLoading', true)
      axios.get(api).then(res => {
        commit('updateLoading', false)
        if (!res.data.success) return false
        commit('getProduct', res.data.products)
        commit('getPagination', res.data.pagination)
      })
    },
    PRODUCT_ADD: ({ dispatch }, tempProduct) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`

      axios.post(api, { data: tempProduct }).then(res => {
        if (!res.data.success) return false
        dispatch('PRODUCTS_GET')
        dispatch('ALERT_SHOW', {
          isAlert: true,
          status: 'success',
          message: res.data.message
        })
      })
    },
    PRODUCT_EDIT: ({ dispatch }, tempProduct) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${tempProduct.id}`

      axios.put(api, { data: tempProduct }).then(res => {
        if (!res.data.success) return false
        dispatch('PRODUCTS_GET')
        dispatch('ALERT_SHOW', {
          isAlert: true,
          status: 'success',
          message: res.data.message
        })
      })
    },
    PRODUCT_REMOVE: ({ dispatch }, id) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${id}`

      axios.delete(api).then(res => {
        if (!res.data.success)
          dispatch('ALERT_SHOW', {
            isAlert: true,
            status: 'danger',
            message: res.data.message
          })
        dispatch('PRODUCTS_GET')
        dispatch('ALERT_SHOW', {
          isAlert: true,
          status: 'success',
          message: res.data.message
        })
      })
    }
  }
})
