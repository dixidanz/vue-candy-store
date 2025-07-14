<script setup lang="ts">
import type { CartResponse, Product } from '@/types'

const props = defineProps<{
  carts: CartResponse
  couponMessage: string
}>()

const emit = defineEmits<{
  delete: [id: Product['id']]
  applyCoupon: [code: string]
}>()

const code = ref('')
</script>

<template>
  <div class="title py-10">
    <img
      class="title_img"
      src="@/assets/images/shopping-basket.png" />
    <h2 class="title_text">
      購物車
    </h2>
  </div>
  <table class="w-full">
    <thead class="bg-tertiary/20">
      <tr class="border-b-2 border-#dee2e6">
        <th class="p-3">
          品名
        </th>
        <th class="p-3 w-25">
          數量
        </th>
        <th class="p-3 text-right w-25">
          單價
        </th>
        <th class="p-3 text-right w-30">
          小計
        </th>
        <th class="p-3 w-30"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item of carts.carts"
        :key="item.id"
        class="border-b border-#dee2e6">
        <td class="p-3 text-center">
          {{ item.product.title }}
        </td>
        <td class="p-3 text-center">
          {{ item.qty }} {{ item.product.unit }}
        </td>
        <td class="p-3 text-right">
          $ {{ item.product.price }}
        </td>
        <td class="p-3 text-right">
          $ {{ item.total }}
        </td>
        <td class="p-3 text-center">
          <button
            class="text-primary font-bold p-1 border transition-transform duration-200 hover:scale-110"
            @click="emit('delete', item.id)">
            <div class="i-carbon-trash-can text-lg"></div>
          </button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td
          colspan="3"
          class="p-3 text-center">
          總計
        </td>
        <td class="p-3 text-right">
          $ {{ carts.total }}
        </td>
      </tr>
      <tr
        v-if="carts.total !== carts.final_total"
        class="border-t border-#dee2e6">
        <td
          colspan="3"
          class="p-3 text-center">
          優惠價
          <span
            v-if="carts.carts?.[0]?.coupon?.code"
            class="text-sm p-0.5 rounded-sm bg-secondary">{{ carts.carts?.[0]?.coupon?.code }}</span>
        </td>
        <td class="p-3 text-right">
          $ {{ Math.ceil(carts.final_total) }}
        </td>
      </tr>
    </tfoot>
  </table>

  <div class="ml-auto py-10 pr-10">
    <div>
      <input
        v-model="code"
        type="text"
        placeholder="請輸入優惠碼"
        class="p-2 border border-#dee2e6 rounded-l-lg h-10 focus:border-secondary" />
      <button
        class="text-primary p-2 rounded-r-lg bg-tertiary h-full cursor-pointer"
        @click="emit('applyCoupon', code)">
        套用
      </button>
    </div>
    <div class="text-sm text-red-400 p-2">
      {{ couponMessage }}
    </div>
  </div>
</template>
