<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
const MainTabBar = () =>
  import("./components/content/MainTabBar/MainTabBar.vue"); //懒加载
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import url("assets/css/base.css");
</style>
