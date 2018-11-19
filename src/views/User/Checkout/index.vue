<script>
export default {
  name: 'checkout',
  computed: {
    orderId() {
      return this.$route.params.orderId
    },
    order() {
      return this.$store.state.UserOrderModules.order
    }
  },
  methods: {
    payOrder() {
      this.$store.dispatch('UserOrderModules/ORDER_PAY', this.orderId)
    }
  },
  mounted() {
    this.$store.dispatch('UserOrderModules/ORDER_GET', this.orderId)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
