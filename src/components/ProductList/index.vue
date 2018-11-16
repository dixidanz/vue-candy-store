<script>
import { mapState } from 'vuex';
export default {
  name: 'productList',
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
