<script>
import { mapGetters } from 'vuex';
export default {
  name: 'categories',
  props: {
    categories: {
      type: Array,
      required: true,
      default: ['全部商品']
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
