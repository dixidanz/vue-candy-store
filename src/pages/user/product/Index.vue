<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue'
import type { Product } from '@/types'

const route = useRoute()

const product = ref<Product>({
  category: '',
  content: '',
  description: '',
  id: '',
  imageUrl: '',
  is_enabled: 0,
  num: 1,
  origin_price: 0,
  price: 0,
  title: '',
  unit: ''
})
const errorMessage = ref('')
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const productId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  const res = await getProduct(productId)
  if (res && res.success && res.product) {
    product.value = res.product
  } else {
    errorMessage.value = res.message
  }
  loading.value = false
})

const pty = ref(1)

const { addCartHandler, carts, addCartLoading } = useCart()
</script>

<template>
  <TheHeader />
  <div class="py-20 min-h-content">
    <Loading v-if="loading" />
    <template v-else>
      <div
        v-if="errorMessage"
        class="text-3xl text-primary font-bold py-10 text-center">
        {{ errorMessage }}
      </div>
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2">
        <div class="px-5 w-full">
          <div
            class="h-500px w-full shadow-[12px_12px_12px_#ccc] bg-cover bg-center"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
        </div>
        <div class="px-5 pt-10">
          <span class="text-xl text-#eee leading-5 p-0.5 px-2 py-1 text-center rounded-1 bg-primary/80">
            {{ product.category }}
          </span>
          <div class="text-4xl text-secondary font-bold my-5 group-hover:text-secondary-dark">
            {{ product.title }}
          </div>
          <div class="text-2xl text-#767676 mb-5 truncate">
            {{ product.description }}
          </div>
          <div class="mb-10 pt-5 border-t-3 border-secondary flex items-center justify-around">
            <span class="text-xl text-#767676 line-through">${{ product.origin_price }}</span>
            <span class="text-3xl text-primary font-bold font-dosis">${{ product.price }}</span>
          </div>
          <div class="mb-10 flex flex-center">
            <button
              class="text-primary bg-tertiary h-10 w-10"
              @click="pty = pty > 1 ? pty - 1 : 1">
              <div class="i-carbon-subtract-large text-2xl w-full"></div>
            </button>
            <div class="leading-10 font-dosis text-center bg-secondary h-10 w-10">
              {{ pty }}
            </div>
            <button
              class="text-primary bg-tertiary h-10 w-10"
              @click="pty++">
              <div class="i-carbon-add text-2xl w-full"></div>
            </button>
          </div>

          <button
            class="text-xl text-primary leading-15 font-medium bg-tertiary h-15 w-full"
            @click="addCartHandler(product.id, pty)">
            <Loading v-if="addCartLoading" />
            <template v-else>
              放入購物車
            </template>
          </button>
        </div>
      </div>
    </template>
  </div>

  <TheFooter />

  <CartButton :count="carts.carts.length || 0" />
</template>
