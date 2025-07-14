import type { Product } from '@/types'

export const useCart = (isLoadCart = true) => {
  const cartStore = useCartStore()
  const { carts } = storeToRefs(cartStore)

  const addCartLoading = ref(false)

  const addCartHandler = async (id: Product['id'], qty: number) => {
    addCartLoading.value = true
    const res = await addCart(id, qty)
    if (res) {
      await cartStore.loadCarts()
    }
    addCartLoading.value = false
  }

  onMounted(async () => {
    if (isLoadCart) {
      await cartStore.loadCarts()
    }
  })

  return {
    carts,
    addCartHandler,
    addCartLoading,
    loadCarts: cartStore.loadCarts
  }
}
