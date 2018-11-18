<script>
import CartList from '@/components/CartList'
import OrderForm from '@/components/OrderForm'
import { mapGetters } from 'vuex';
export default {
  name: 'cart',
  components: {
    CartList,
    OrderForm
  },
  computed: {
    ...mapGetters('UserCartModules', [
      'cartCount'
    ])
  },
  mounted() {
    this.$store.dispatch('UserCartModules/CARTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
