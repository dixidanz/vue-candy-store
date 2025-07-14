import type { Product } from '@/types'

export const useProductStore = defineStore('product', () => {
  const allProducts = ref<Product[]>([])

  const loadProducts = async (page: number) => {
    const res = await getProducts(page)
    allProducts.value = res.products
  }

  const allCategoryName = '全部商品'

  const categories = computed(() => {
    return [
      allCategoryName,
      ...Array.from(new Set(allProducts.value.map(product => product.category)))
    ]
  })

  const currentCategory = ref(allCategoryName)

  const products = computed(() => {
    if (currentCategory.value === allCategoryName) {
      return allProducts.value
    }
    return allProducts.value.filter(product => product.category === currentCategory.value)
  })

  return {
    allProducts,
    products,
    loadProducts,
    categories,
    currentCategory
  }
})
