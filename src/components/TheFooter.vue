<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="text-primary py-5 bg-tertiary flex flex-col flex-center">
    <a
      href="https://github.com/dixidanz/vue-candy-store"
      target="_blank"
      rel="noopener noreferrer"
      class="i-carbon-logo-github text-2xl"></a>
    <div class="text-xl text-primary font-bold mt-2">
      &copy;copyright {{ year }}
    </div>
  </footer>
</template>
