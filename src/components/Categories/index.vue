<script>
export default {
  name: 'categories',
  props: {
    categories: {
      type: Array,
      required: true,
      default: ['全部商品']
    }
  },
  computed: {
    currentCategory() {
      return this.$store.state.UserProductsModules.currentCategory
    }
  },
  methods: {
    updateCategory(category) {
      this.$store.commit('UserProductsModules/updateCategory', category)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
