<script>
import CartIcon from '@/components/CartIcon/index';
export default {
  name: 'product',
  components: {
    CartIcon
  },
  data() {
    return {
      count: 1
    }
  },
  computed: {
    product() {
      return this.$store.state.UserProductsModules.product
    }
  },
  methods: {
    addCount(num) {
      this.count += num
      if(this.count <= 0) this.count = 1
    },
    addCart(id) {
      const cart = {
        product_id: id,
        qty: this.count
      }
      this.$store.dispatch('UserCartModules/CART_ADD', cart)
    },
  },
  mounted(){
    const productId = this.$route.params.productId
    this.$store.dispatch('UserProductsModules/PRODUCT_GET', productId)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
