import type { CartData } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const carts = ref({
    carts: [] as CartData[],
    total: 0,
    final_total: 0
  })

  const loadCarts = async () => {
    carts.value = await getCarts()
  }

  return {
    carts,
    loadCarts
  }
})
