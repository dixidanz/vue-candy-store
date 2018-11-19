<script>
export default {
  name: 'searchOrder',
  data() {
    return {
      orderId: '',
      errorMessage: '',
    }
  },
  methods: {
    searchOrder() {
      this.errorMessage = ''
      if(!this.orderId) {
        this.errorMessage = '請輸入訂單編號'
        return false
      }
      this.$store.dispatch('UserOrderModules/ORDER_GET', this.orderId).then(res => {
        if(res.order !== null)
          this.$router.push(`checkout/${this.orderId}`)
        else
          this.errorMessage = '查無此訂單'
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
