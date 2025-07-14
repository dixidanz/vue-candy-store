<script setup lang="ts">
import type { Order } from '@/types'

const route = useRoute()
const { id } = route.params as { id: string }

const order = ref<Order>({
  create_at: 0,
  id: '',
  is_paid: false,
  message: '',
  products: {},
  total: 0,
  user: {
    address: '',
    email: '',
    name: '',
    tel: ''
  }
})

const message = ref('')

onMounted(async () => {
  const res = await getOrder(id)
  if (res.order) {
    order.value = res.order
  } else {
    message.value = '查無此訂單'
  }
})

const loading = ref(false)
const payOrderHandler = async () => {
  loading.value = true
  const res = await payOrder(id)
  if (res) {
    order.value.is_paid = true
    loading.value = false
  }
}
</script>

<template>
  <TheHeader />
  <main class="py-10 flex flex-col min-h-content items-center">
    <div class="text-xl text-primary mb-10 px-5 py-3 border border-primary/50 rounded-sm">
      <p>訂單編號: {{ id }}</p>
    </div>

    <div
      v-if="message"
      class="text-xl text-primary">
      {{ message }}
    </div>
    <template v-else>
      <div>
        <div class="title pb-10">
          <img
            class="title_img"
            src="@/assets/images/sweet.png" />
          <h2 class="title_text">
            商品資訊
          </h2>
        </div>
        <table>
          <thead class="bg-tertiary/20">
            <tr class="border-b-2 border-#dee2e6">
              <th class="p-3 w-50">
                品名
              </th>
              <th class="p-3 w-20">
                數量
              </th>
              <th class="p-3 text-right w-30">
                小計
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item, key of order.products"
              :key="key"
              class="border-b border-#dee2e6">
              <td class="p-3 text-center">
                {{ item.product.title }}
              </td>
              <td class="p-3 text-center">
                {{ item.qty }} {{ item.product.unit }}
              </td>
              <td class="p-3 text-right">
                $ {{ item.total }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colspan="2"
                class="p-3 text-center">
                總計
              </td>
              <td class="p-3 text-right">
                $ {{ order.total }}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div>
        <div class="title py-10">
          <img
            class="title_img"
            src="@/assets/images/resume.png" />
          <h2 class="title_text">
            個人資訊
          </h2>
        </div>
        <table class="w-100">
          <tbody>
            <tr class="border-b border-#dee2e6">
              <td
                width="200"
                class="text-secondary p-3">
                Email
              </td>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr class="border-b border-#dee2e6">
              <td class="text-secondary p-3">
                姓名
              </td>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr class="border-b border-#dee2e6">
              <td class="text-secondary p-3">
                收件人電話
              </td>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr class="border-b border-#dee2e6">
              <td class="text-secondary p-3">
                收件人地址
              </td>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr class="border-b border-#dee2e6">
              <td class="text-secondary p-3">
                付款狀態
              </td>
              <td>
                <span
                  v-if="!order.is_paid"
                  class="text-red-600">尚未付款</span>
                <span
                  v-else
                  class="text-green-600">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          v-if="!order.is_paid"
          class="text-right">
          <button
            class="text-primary font-bold mt-5 px-3 py-2 rounded-md bg-tertiary"
            @click="payOrderHandler">
            <Loading v-if="loading" />
            <template v-else>
              付款付起來
            </template>
          </button>
        </div>
      </div>
    </template>
  </main>
  <TheFooter />
</template>
