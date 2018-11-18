<script>
import CartList from '@/components/CartList'
export default {
  name: 'cart',
  components: {
    CartList
  },
  computed: {
  },
  mounted() {
    this.$store.dispatch('UserCartModules/CARTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
