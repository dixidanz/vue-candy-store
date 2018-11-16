<script>
import Navbar from '@/components/Navbar/index';
import Carousel from '@/components/Carousel/index';
import Categories from '@/components/Categories/index';
import FooterComponent from '@/components/Footer/index';
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  components: {
    Navbar,
    Carousel,
    Categories,
    FooterComponent
  },
  computed: {
    ...mapGetters('UserProductsModules', [
      'categories'
    ])
  },
  mounted() {
    this.$store.dispatch('UserProductsModules/PRODUCTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
