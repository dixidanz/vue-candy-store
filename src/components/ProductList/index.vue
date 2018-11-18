<script>
import { mapState } from 'vuex';
export default {
  name: 'productList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    loadingItem() {
      return this.$store.state.UserCartModules.loadingItem
    }
  },
  methods: {
    addCart(id) {
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$store.dispatch('UserCartModules/CART_ADD', cart)
    },
    productDetail(id) {
      this.$router.push(`/product/${id}`)
    }
  },
  mounted() {
    this.$store.dispatch('UserCartModules/CARTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
