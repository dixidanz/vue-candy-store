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
      this.$store.commit('updateLoading', true)
      axios.post(api, this.user).then(res => {
        this.$store.commit('updateLoading', false)
        if(res.data.success){
          this.$store.commit('setToken', res.data.token)
          this.$router.push('/admin/product')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
