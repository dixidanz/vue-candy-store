import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  strict: true,
  namespaced: true,
  state: {
    products: [],
    pagination: {}
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
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      commit('updateLoading', true, { root: true })
      axios.get(api).then(res => {
        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
        commit('getProduct', res.data.products)
        commit('getPagination', res.data.pagination)
      })
    }
  },
  getters: {
    categories: (state) => {
      const category = new Set()
      state.products.forEach(item => {
        if (!item.category) return false
        category.add(item.category)
      })
      const categories = Array.from(category)
      categories.unshift('全部商品')
      return categories
    }
  }
})
