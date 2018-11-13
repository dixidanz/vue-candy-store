<script>
export default {
  name: 'alert',
  data() {
    return {}
  },
  methods: {
    removeMessage() {
      this.$store.dispatch('ALERT_CLOSE', { isAlert: false })
    }
  },
  computed: {
    alert() {
      return this.$store.state.alert
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
