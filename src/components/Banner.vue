<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Autoplay, Navigation, Pagination]

const createUrl = (path: string) => {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
</script>

<template>
  <Swiper
    loop
    :autoplay="{
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: true
    }"
    navigation
    :modules="modules"
    class="swiper max-h-100 w-full">
    <SwiperSlide
      v-for="n of 3"
      :key="n">
      <img :src="createUrl(`banner${n}.jpg`)" />
    </SwiperSlide>
    ...
  </Swiper>
</template>

<style scoped>
.swiper {
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-inactive-color: #fff;
  --swiper-pagination-color: var(--c-primary);
  --swiper-pagination-bottom: 0;
  --swiper-navigation-color: var(--c-primary);
  --swiper-navigation-sides-offset: 0;
}
</style>
