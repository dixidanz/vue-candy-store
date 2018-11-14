<script> 
import $ from 'jquery'
import axios from 'axios'
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import Pagination from '@/components/Pagination/index'

export default {
  name: 'product',
  components: {
    Loading,
    Pagination
  },
  data() {
    return {
      tempProduct: {},
      isNew: false,
      fileLoading: false
    }
  },
  computed: {
    ...mapGetters('AdminProductModules', ['products', 'pagination'])
  },
  methods: {
    openUpModal(isNew, item) {
      if(isNew) {
        this.tempProduct = {}
        this.isNew = true
      }else {
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    openDelModal(item) {
      this.tempProduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    updateProduct() {
      if(this.isNew)
        this.$store.dispatch('AdminProductModules/PRODUCT_ADD', this.tempProduct)
      else
        this.$store.dispatch('AdminProductModules/PRODUCT_EDIT', this.tempProduct)

      $('#productModal').modal('hide')
    },
    removeProduct() {
      this.$store.dispatch('AdminProductModules/PRODUCT_REMOVE', this.tempProduct.id).then(() => {
        $('#delProductModal').modal('hide')
      })
    },
    uploadFile () {
      const uploadedFilte = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFilte)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      this.fileLoading = true
      axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then(res => {
        this.fileLoading = false
        if(!res.data.success) 
          this.$store.dispatch('ALERT_SHOW', {
            isAlert: true,
            status: 'danger',
            message: res.data.message
          })
        this.$set(this.tempProduct, 'imageUrl', res.data.imageUrl)
      })
    },
    getProducts(page) {
      this.$store.dispatch('AdminProductModules/PRODUCTS_GET', page)
    }
  },
  mounted() {
    this.$store.dispatch('AdminProductModules/PRODUCTS_GET')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
