<script setup lang="ts">
import CartTable from './components/CartTable.vue'
import CheckoutForm from './components/CheckoutForm.vue'
import type { Product } from '@/types'

const { carts, loadCarts } = useCart()

const deleteCartHandler = async (id: Product['id']) => {
  await deleteCart(id)
  await loadCarts()
}

const couponMessage = ref('')
const applyCouponHandler = async (code: string) => {
  const res = await applyCoupon(code)
  if (!res.success) {
    couponMessage.value = res.message
  }
}
</script>

<template>
  <TheHeader />
  <main class="flex flex-col min-h-content items-center">
    <div
      v-if="carts.carts.length === 0"
      class="text-xl text-primary my-auto p-10 text-center rounded-lg bg-tertiary/50">
      購物車沒東西！快去選購吧！
    </div>
    <template v-else>
      <CartTable
        :carts="carts"
        :coupon-message
        @delete="deleteCartHandler"
        @apply-coupon="applyCouponHandler" />
      <CheckoutForm />
    </template>
  </main>
  <TheFooter />
</template>
