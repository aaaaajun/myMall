<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 不要直接对插槽进行操作,而是外面套一层盒子进行操作 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  // 父子传递参数用的更多的是对象写法,不仅可以指定参数类型,还可以设置默认值等等
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    // 判断是否处于活跃
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 为真执行前面。为假执行后面
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
 1.注意插槽就是占位符的用处,不用想的太复杂
 2.注意组件之间的嵌套,如果你在template里执意写一个最外面的盒子,当心盒子的嵌套让样式不生效