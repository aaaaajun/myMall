<template>
  <Swiper>
    <!-- v-for循环获取数组的值 -->
    <SwiperItem v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      defalult() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
</style>