<script>
export default {
  name: 'pagination',
  computed: {
    pagination() {
      return this.$store.state.pagination
    }
  },
  methods: {
    updatePage(page) {
      this.$store.dispatch('PRODUCTS_GET', page)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
