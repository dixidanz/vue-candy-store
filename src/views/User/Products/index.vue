<script>
  import Carousel from '@/components/Carousel/index';
  import Categories from '@/components/Categories/index';
  import ProductCard from '@/components/ProductCard/index';
  import CartList from '@/components/CartList/index';
  import CartIcon from '@/components/CartIcon/index';
  // import Pagination from '@/components/Pagination/index';

  import { mapGetters } from 'vuex'
  export default {
    name: 'products',
    components: {
      Carousel,
      Categories,
      ProductCard,
      CartList,
      CartIcon,
      // Pagination
    },
    computed: {
      ...mapGetters('UserProductsModules', [
        'categories',
        'products',
        // 'pagination'
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
