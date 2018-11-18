<script>
export default {
  name: 'orderForm',
  data(){
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    submitOrder() {
      this.$validator.validate().then(result => {
        if (result) {
          this.$store.dispatch('UserOrderModules/ORDER_CREATE', this.form)
        }
      });
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
