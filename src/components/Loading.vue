<script setup lang="ts">

</script>

<template>
  <div class="loading-dots">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.loading-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
}
.loading-dots span {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin: 0 0.2em;
  background: var(--c-primary);
  border-radius: 50%;
  opacity: 0.6;
  animation: loading-bounce 1.2s infinite both;
}
.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes loading-bounce {
  0%, 80%, 100% {
    transform: scale(0.7);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
