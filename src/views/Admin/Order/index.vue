<script>
import { mapGetters } from 'vuex'
import Pagination from '@/components/Pagination/index'

export default {
  name: 'order',
  components: {
    Pagination
  },
  computed: {
    ...mapGetters('AdminOrderModules', ['orders', 'pagination'])
  },
  methods: {
    getOrders(page) {
      this.$store.dispatch('AdminOrderModules/ORDER_GET', page)
    }
  },
  mounted() {
    this.$store.dispatch('AdminOrderModules/ORDER_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
