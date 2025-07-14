<script setup lang="ts">
import { configure, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

configure({
  validateOnBlur: false
})

const schema = toTypedSchema(
  z.object({
    email: z.string().nonempty('必填').email('email 格式錯誤'),
    username: z.string().nonempty('必填'),
    tel: z.string().nonempty('必填').startsWith('09', '必須為 09 開頭').length(10, '必須為 10 碼'),
    address: z.string().nonempty('必填'),
    note: z.string().max(50, '最多 50 字')
  })
)

const { errors, defineField } = useForm({
  validationSchema: schema
})

const [email, emailAttrs] = defineField('email')
const [username, usernameAttrs] = defineField('username')
const [tel, telAttrs] = defineField('tel')
const [address, addressAttrs] = defineField('address')
const [note, noteAttrs] = defineField('note')

const notAllowSubmit = computed(() => {
  return Object.keys(errors.value).length > 0
    || !email.value || !username.value || !tel.value || !address.value
})

const router = useRouter()

const loading = ref(false)
const submitOrderHandler = async () => {
  loading.value = true
  if (notAllowSubmit.value) {
    loading.value = false
    return
  }

  const res = await sumbitOrder({
    user: {
      email: email.value!,
      name: username.value!,
      tel: tel.value!,
      address: address.value!
    },
    message: note.value
  })
  if (!res.success || !res.orderId) return
  loading.value = false
  router.push({ name: 'order', params: { id: res.orderId } })
}
</script>

<template>
  <div class="title py-10">
    <img
      class="title_img"
      src="@/assets/images/padnote.png" />
    <h2 class="title_text">
      訂單資訊
    </h2>
  </div>
  <div class="pb-10 space-y-3">
    <div class="flex flex-col">
      <label
        class="text-gray-800"
        for="useremail">Email*</label>
      <input
        id="useremail"
        v-model="email"
        v-bind="emailAttrs"
        type="text"
        class="text-gray-700 p-1 border border-gray-300 rounded-sm w-75 md:w-100"
        :class="{ 'border-red-400': errors.email }" />
      <div class="text-red-400 p-1">
        {{ errors.email }}
      </div>
    </div>
    <div class="flex flex-col">
      <label
        class="text-gray-800"
        for="username">收件人姓名*</label>
      <input
        id="username"
        v-model="username"
        type="text"
        v-bind="usernameAttrs"
        class="text-gray-700 p-1 border border-gray-300 rounded-sm w-75 md:w-100"
        :class="{ 'border-red-400': errors.username }" />
      <div class="text-red-400 p-1">
        {{ errors.username }}
      </div>
    </div>
    <div class="flex flex-col">
      <label
        class="text-gray-800"
        for="tel">收件人電話*</label>
      <input
        id="tel"
        v-model="tel"
        type="text"
        v-bind="telAttrs"
        class="text-gray-700 p-1 border border-gray-300 rounded-sm w-75 md:w-100"
        :class="{ 'border-red-400': errors.tel }" />
      <div class="text-red-400 p-1">
        {{ errors.tel }}
      </div>
    </div>
    <div class="flex flex-col">
      <label
        class="text-gray-800"
        for="address">收件人地址*</label>
      <input
        id="address"
        v-model="address"
        type="text"
        v-bind="addressAttrs"
        class="text-gray-700 p-1 border border-gray-300 rounded-sm w-75 md:w-100"
        :class="{ 'border-red-400': errors.address }" />
      <div class="text-red-400 p-1">
        {{ errors.address }}
      </div>
    </div>
    <div class="flex flex-col">
      <label
        class="text-gray-800"
        for="note">備註</label>
      <textarea
        id="note"
        v-model="note"
        v-bind="noteAttrs"
        class="text-gray-700 p-1 border border-gray-300 rounded-sm w-75 md:w-100"
        :class="{ 'border-red-400': errors.note }"></textarea>
      <div class="text-red-400 p-1">
        {{ errors.note }}
      </div>
    </div>
    <div class="text-right">
      <button
        class="text-primary p-2 rounded-sm bg-tertiary cursor-pointer"
        :class="{ 'cursor-not-allowed opacity-50': notAllowSubmit }"
        @click="submitOrderHandler">
        <Loading v-if="loading" />
        <template v-else>
          送出訂單
        </template>
      </button>
    </div>
  </div>
</template>
