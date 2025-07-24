<script setup lang="ts">
const productStore = useProductStore()
const {
  categories,
  products,
  currentCategory
} = storeToRefs(productStore)

const { carts } = useCart()

const loading = ref(false)
onMounted(async () => {
  loading.value = true
  await productStore.loadProducts(1)
  loading.value = false
})
</script>

<template>
  <TheHeader />
  <Banner />
  <main class="px-5 py-5 gap-5 grid grid-cols-4 min-h-content">
    <aside class="flex flex-col col-span-4 md:col-span-1">
      <button
        v-for="category of categories"
        :key="category"
        class="text-lg text-primary leading-50px font-medium mb-2 border border-#ccc rounded-2.5 bg-secondary/50 transition-border hover:border-primary"
        :class="{ 'border-primary': category === productStore.currentCategory }"
        @click="currentCategory = category">
        {{ category }}
      </button>
    </aside>
    <Loading
      v-if="loading"
      class="col-span-3" />
    <section
      v-else
      class="gap-x-3 gap-y-5 grid col-span-4 grid-cols-1 w-full items-start md:col-span-3 md:grid-cols-3 sm:grid-cols-2">
      <ProductCard
        v-for="product of products"
        :key="product.id"
        :product="product" />
    </section>
  </main>
  <TheFooter />

  <CartButton :count="carts.carts.length || 0" />
</template>
