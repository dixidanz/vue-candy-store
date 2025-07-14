<script setup lang="ts">
const { carts } = useCart()

const { copy } = useClipboard()

const promotions = [
  { code: '牙齒掉光光', discount: '87' },
  { code: '給你看牙醫', discount: '38' }
]
</script>

<template>
  <TheHeader />
  <main class="flex flex-col min-h-content flex-center">
    <div class="title py-10">
      <img
        class="title_img"
        src="@/assets/images/promotions.png" />
      <h2 class="title_text">
        優惠活動
      </h2>
    </div>

    <div class="pb-5 flex flex-col space-y-5">
      <button
        v-for="promotion of promotions"
        :key="promotion.code"
        class="promotions"
        @click="copy(promotion.code)">
        <div class="promotions_content">
          點擊複製
          <strong class="promotions_code">{{ promotion.code }}</strong>
          可享 {{ promotion.discount }} 折
        </div>
      </button>
    </div>
  </main>
  <TheFooter />

  <CartButton :count="carts.carts.length || 0" />
</template>

<style scoped>
.promotions{
  position: relative;
  cursor: pointer;
}

.promotions::before, .promotions::after{
  content: '';
  position: absolute;
  border-style: solid;
  border-radius: 40%;
  top: 50%;
  transform: translateY(-50%);
}

.promotions::before{
  left: -50px;
  border-width: 50px 0 50px 86.6px;
  border-color: transparent transparent transparent var(--c-tertiary);
}

.promotions::after{
  right: -50px;
  border-color: transparent var(--c-tertiary) transparent transparent;
  border-width: 50px 86.6px 50px 0;
}

.promotions_content {
  width: 300px;
  height: auto;
  background-color: var(--c-secondary);
  border-radius: 50px;
  position: relative;
  z-index: 10;
  font-size: 20px;
  color: var(--c-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  letter-spacing: 2px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.075);
}

.promotions_code {
  color: var(--c-secondary);
  background-color: var(--c-primary);
  padding: 4px;
  font-weight: bold;
}
</style>
