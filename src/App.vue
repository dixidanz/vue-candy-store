<template>
  <div id="app">
    <loading v-if="loading"></loading>
    <router-view />
  </div>
</template>

<script>
  import loading from '@/components/Loading/index'
  export default{
    name: "App",
    components: {
      loading
    },
    computed: {
      loading() {
        return this.$store.state.loading
      }
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
</style>
