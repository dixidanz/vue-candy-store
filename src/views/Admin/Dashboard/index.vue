<script>
import axios from 'axios'

export default {
  name: 'dashboard',
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      
      axios.post(api, this.user).then(res => {
        if(res.data.success)
          this.$router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
