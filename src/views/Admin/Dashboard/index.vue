<script>
import axios from 'axios'
import Alert from '@/components/Alert/index';
import Pagination from '@/components/Pagination/index';
export default {
  name: 'dashboard',
  components: {
    Alert,
    Pagination
  },
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
