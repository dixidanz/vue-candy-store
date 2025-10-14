<script setup lang="ts">
const props = defineProps<{
  message: string
}>()

const show = defineModel<boolean>('show', { required: true })

const { start } = useTimeoutFn(() => {
  show.value = false
}, 1500, {
  immediate: false
})

watchEffect(() => {
  if (show.value) {
    start()
  }
})
</script>

<template>
  <Transition name="toast">
    <div
      v-if="show"
      class="toast">
      <div class="toast_content">
        {{ props.message }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.toast {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1000;
}

.toast_content {
  min-width: 220px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 16px 20px;
  border-radius: 12px;
  letter-spacing: 1px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  pointer-events: auto;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.2s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>
