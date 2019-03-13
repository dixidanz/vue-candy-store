<script>
  import $ from 'jquery'
  import { mapGetters } from 'vuex'
  import Pagination from '@/components/Pagination/index'

  export default {
    name: 'order',
    components: {
      Pagination,
    },
    data() {
      return {
        tempOrder: {},
        tempOrderUser: {},
      }
    },
    computed: {
      ...mapGetters('AdminOrderModules', ['orders', 'pagination'])
    },
    methods: {
      getOrders(page) {
        this.$store.dispatch('AdminOrderModules/ORDER_GET', page)
      },
      updateOrder() {
        this.$validator.validate().then(result => {
          if (!result) return false
          this.tempOrder.user = this.tempOrderUser
          this.$store.dispatch('AdminOrderModules/ORDER_EDIT', this.tempOrder)
          $('#orderModal').modal('hide')
        });
      },
      openUpModal(item) {
        this.tempOrder = { ...item }
        this.tempOrderUser = { ...item.user }
        $('#orderModal').modal('show')
      }
    },
    mounted() {
      this.$store.dispatch('AdminOrderModules/ORDER_GET')
    }
  }
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
