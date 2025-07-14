<script setup lang="ts">
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const { addCartHandler, addCartLoading } = useCart(false)
</script>

<template>
  <div class="rounded-1 shadow-[0_5px_12px_#ddd] overflow-hidden">
    <RouterLink
      :to="{ name: 'product', params: { id: product.id } }"
      class="group w-full inline-block">
      <div class="h-38 w-full transition-transform overflow-hidden">
        <div
          class="h-full w-full duration-1000 bg-cover bg-center group-hover:scale-120"
          :style="{ backgroundImage: `url(${product.imageUrl})` }"></div>
      </div>
      <div class="px-2 py-2 space-y-1">
        <div class="text-#eee leading-5 p-0.5 text-center rounded-1 bg-primary/80 min-w-25 w-25">
          {{ product.category }}
        </div>
        <div class="text-xl text-secondary font-bold group-hover:text-secondary-dark">
          {{ product.title }}
        </div>
        <div class="text-#767676 truncate">
          {{ product.description }}
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-#767676 line-through">${{ product.origin_price }}</span>
          <span class="text-xl text-primary font-bold font-dosis">${{ product.price }}</span>
        </div>
      </div>
    </RouterLink>
    <button
      class="text-lg text-primary leading-10 font-medium bg-tertiary h-10 w-full cursor-pointer"
      @click="addCartHandler(product.id, 1)">
      <Loading v-if="addCartLoading" />
      <template v-else>
        放入購物車
      </template>
    </button>
  </div>
</template>
