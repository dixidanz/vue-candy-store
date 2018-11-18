<script>
import Carousel from '@/components/Carousel/index';
import Categories from '@/components/Categories/index';
import ProductList from '@/components/ProductList/index';
import CartList from '@/components/CartList/index';

import { mapGetters } from 'vuex'
export default {
  name: 'products',
  components: {
    Carousel,
    Categories,
    ProductList,
    CartList
  },
  computed: {
    ...mapGetters('UserProductsModules', [
      'categories',
      'products',
    ]),
    ...mapGetters('UserCartModules', [
      'cartCount'
    ])
  },
  mounted() {
    this.$store.dispatch('UserProductsModules/PRODUCTS_GET')
    this.$store.dispatch('UserCartModules/CARTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
