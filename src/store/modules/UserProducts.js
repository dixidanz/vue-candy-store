import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    products: [],
    pagination: {},
    currentCategory: '全部商品',
    product: {},
  },
  mutations: {
    getProducts: (state, products) => {
      state.products = products
    },
    getPagination: (state, pagination) => {
      state.pagination = pagination
    },
    updateCategory: (state, category) => {
      state.currentCategory = category
    },
    getProduct: (state, product) => {
      state.product = product
    }
  },
  actions: {
    PRODUCTS_GET: ({ commit }, page = 1) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      commit('updateLoading', true, { root: true })
      axios.get(api).then(res => {
        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
        commit('getProducts', res.data.products)
        commit('getPagination', res.data.pagination)
      })
    },
    PRODUCT_GET: ({ commit }, id) => {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      commit('updateLoading', true, { root: true })
      axios.get(api).then(res => {
        commit('updateLoading', false, { root: true })
        if (!res.data.success) return false
        commit('getProduct', res.data.product)
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
    },
    products: (state) => {
      if (!state.currentCategory || state.currentCategory === "全部商品")
        return state.products
      else
        return state.products.filter(item => {
          return item.category === state.currentCategory
        })
    },
    pagination: (state) => {
      return state.pagination
    }
  }
})
