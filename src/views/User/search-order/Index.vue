<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'

const id = ref('')
</script>

<template>
  <TheHeader />
  <main class="flex flex-col min-h-content flex-center">
    <div class="title py-10">
      <img
        class="title_img"
        src="@/assets/images/resume.png" />
      <h2 class="title_text">
        訂單查詢
      </h2>
    </div>
    <div class="flex flex-col">
      <input
        v-model="id"
        type="text"
        placeholder="訂單編號"
        class="text-gray-700 mb-5 p-2 border border-gray-300 rounded-lg w-50 md:w-75" />
      <button
        class="text-primary p-2 rounded-lg bg-tertiary cursor-pointer"
        :class="{ 'cursor-not-allowed opacity-50': !id }"
        @click="id ? $router.push({ name: 'order', params: { id } }) : null">
        查詢
      </button>
    </div>
  </main>
  <TheFooter />
</template>
