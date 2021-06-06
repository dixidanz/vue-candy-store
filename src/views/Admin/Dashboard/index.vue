<script>
import axios from 'axios'
import Alert from '@/components/Alert/index';
export default {
  name: 'dashboard',
  components: {
    Alert,
  },
  mounted() {
    },
  methods: {
    signout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      
      axios.defaults.headers.common['Authorization'] = this.$store.state.token
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
