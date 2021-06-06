import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import { apiAdminProductsGet, apiAdminProductAdd, apiAdminProductEdit, apiAdminProductRemove } from '@/api.js'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    products: [],
    pagination: {},
  },
  mutations: {
    getProduct: (state, products) => {
      state.products = products
    },
    getPagination: (state, pagination) => {
      state.pagination = pagination
    },
  },
  actions: {
    PRODUCTS_GET: ({ commit }, page = 1) => {
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      commit('updateLoading', true, { root: true })
      apiAdminProductsGet().then(res => {
        if (!res.data.success) return false
        commit('getProduct', res.data.products)
        commit('getPagination', res.data.pagination)
        commit('updateLoading', false, { root: true })
      })
    },
    PRODUCT_ADD: ({ dispatch }, tempProduct) => {
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      apiAdminProductAdd({ data: tempProduct }).then(res => {
        if (!res.data.success) return false
        dispatch('PRODUCTS_GET')
        dispatch('ALERT_SHOW', {
          isAlert: true,
          status: 'success',
          message: res.data.message
        }, { root: true })
      })
    },
    PRODUCT_EDIT: ({ dispatch }, tempProduct) => {
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${tempProduct.id}`
      apiAdminProductEdit(tempProduct.id, { data: tempProduct }).then(res => {
        if (!res.data.success) return false
        dispatch('PRODUCTS_GET')
        dispatch('ALERT_SHOW', {
          isAlert: true,
          status: 'success',
          message: res.data.message
        }, { root: true })
      })
    },
    PRODUCT_REMOVE: ({ dispatch }, id) => {
      // const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${id}`
      apiAdminProductRemove(id).then(res => {
        if (!res.data.success)
          dispatch('ALERT_SHOW', {
            isAlert: true,
            status: 'danger',
            message: res.data.message
          }, { root: true })
        dispatch('PRODUCTS_GET')
        dispatch('ALERT_SHOW', {
          isAlert: true,
          status: 'success',
          message: res.data.message
        }, { root: true })
      })
    }
  },
  getters: {
    products: state => {
      return state.products
    },
    pagination: state => {
      return state.pagination
    }
  }
})
