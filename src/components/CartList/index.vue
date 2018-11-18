<script>
import { mapGetters } from 'vuex';
export default {
  name: 'cartList',
  data() {
    return {
      couponCode: ''
    }
  },
  computed: {
    ...mapGetters('UserCartModules', [
      'cartItem',
      'cartCount',
      'cartTotal',
      'cartFinalTotal',
      'couponMessage'
    ])
  },
  methods: {
    removeCart(id) {
      this.$store.dispatch('UserCartModules/CART_REMOVE', id)
    },
    couponApply() {
      this.$store.dispatch('UserCartModules/COUPON_APPLY', this.couponCode)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
