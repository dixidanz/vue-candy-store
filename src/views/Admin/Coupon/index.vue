<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import Pagination from '@/components/Pagination/index'

export default {
  name: 'coupons',
  components: {
    Pagination
  },
  data() {
    return {
      tempCoupon: {},
      isNew: false,
      due_date: new Date()
    }
  },
  watch: {
    due_date() {
      const timestamp = Math.floor(new Date(this.due_date) / 1000)
      this.tempCoupon.due_date = timestamp
    }
  },
  computed: {
    ...mapGetters('AdminCouponModules', ['coupons', 'pagination'])
  },
  methods: {
    openUpModal(isNew, item) {
      this.isNew = isNew
      if(isNew) {
        this.tempCoupon = {}
      }else {
        this.tempCoupon = Object.assign({}, item)
        if(!this.tempCoupon.due_date)
          this.tempCoupon.due_date = new Date()
        this.due_date = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')[0]
      }
      $('#couponModal').modal('show')
      
    },
    openDelModal(item) {
      this.tempCoupon = Object.assign({}, item)
      $('#delCouponModal').modal('show')
    },
    updateCoupon() {
      if(this.isNew)
        this.$store.dispatch('AdminCouponModules/COUPON_ADD', this.tempCoupon)
      else
        this.$store.dispatch('AdminCouponModules/COUPON_EDIT', this.tempCoupon)

      $('#couponModal').modal('hide')
      this.due_date = new Date()
    },
    removeCoupon() {
      this.$store.dispatch('AdminCouponModules/COUPON_REMOVE', this.tempCoupon.id).then(() => {
        $('#delCouponModal').modal('hide')
      })
    },
    getCoupons(page) {
      this.$store.dispatch('AdminCouponModules/COUPONS_GET', page)
    }
  },
  mounted() {
    this.$store.dispatch('AdminCouponModules/COUPONS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
