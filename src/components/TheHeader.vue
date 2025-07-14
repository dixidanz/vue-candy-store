<script setup lang="ts">

</script>

<template>
  <header class="pb-3 pt-5 bg-secondary/50 flex flex-col flex-center">
    <h1 class="mb-2 rounded-2.5 bg-primary">
      <RouterLink
        :to="{ name: 'home' }"
        class="text-9.5 text-secondary leading-22 font-dosis font-extrabold text-center h-22 w-75 inline-block hover:text-secondary-dark">
        CANDY STORE
      </RouterLink>
    </h1>
    <nav>
      <RouterLink
        class="link"
        to="/search-order">
        訂單查詢
      </RouterLink>
      <RouterLink
        class="link"
        to="/">
        首頁
      </RouterLink>
      <RouterLink
        class="link"
        to="/promotions">
        優惠活動
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.link {
  color: var(--c-primary);
  display: inline-block;
  line-height: 40px;
  font-weight: 900;
  text-decoration: none;
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.5, 0, 0.32, 1.88);
}

.link:hover {
  box-shadow: inset 0px -4px 0px var(--c-primary);
}

.link.router-link-exact-active {
  box-shadow: inset 0px -4px 0px var(--c-primary);
}

.link + .link {
  margin-left: 20px;
}
</style>
