<script setup lang="ts">
const props = defineProps<{
  count: number
}>()
</script>

<template>
  <RouterLink
    to="/cart"
    class="relative">
    <button class="bottom-9 right-6 fixed">
      <img
        src="@/assets/images/shopping-basket.png"
        class="h-50px w-50px" />
      <div class="text-#fff leading-6 rounded-full bg-primary h-6 w-6 absolute -right-1 -top-1">
        {{ count || 0 }}
      </div>
    </button>
  </RouterLink>
</template>
