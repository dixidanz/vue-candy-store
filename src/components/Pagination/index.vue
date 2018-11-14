<script>
export default {
  name: 'pagination',
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },
  methods: {
    updatePage(page) {
      // this.$store.dispatch('PRODUCTS_GET', page)
      this.$emit('update-page', page)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
