<script>
import Carousel from '@/components/Carousel/index';
import Categories from '@/components/Categories/index';
import ProductList from '@/components/ProductList/index';
import { mapGetters } from 'vuex'
export default {
  name: 'products',
  components: {
    Carousel,
    Categories,
    ProductList
  },
  computed: {
    ...mapGetters('UserProductsModules', [
      'categories',
      'products'
    ])
  },
  mounted() {
    this.$store.dispatch('UserProductsModules/PRODUCTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
