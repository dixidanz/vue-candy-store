<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`
      
      axios.post(api, this.user).then(res => {
        if(res.data.success)
          this.$router.push('/product')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
