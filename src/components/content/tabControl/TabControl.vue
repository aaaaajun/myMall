<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: index === currentInedx }"
      @click="itemClick(index)"
    >
      <!-- 动态绑定被点击的元素，改变颜色 -->
      <!-- 判断点击了那个盒子 -->
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
    },
  },
  data() {
    return {
      currentInedx: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentInedx = index;
      // 发出点击事件给home页面，进切换展示的图片
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  background-color: #fff;
  z-index: 2;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 10px;
}
.active {
  color: pink;
}
.active span {
  border-bottom: 4px solid red;
}
</style>