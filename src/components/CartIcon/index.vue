<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cartIcon',
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
