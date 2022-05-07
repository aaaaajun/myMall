<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 16px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #f3f3f3;
}
.recommend .recommend-item {
  flex: 1;
}
.recommend div img {
  width: 80px;
  height: 80px;
  margin-bottom: 6px;
}
</style>