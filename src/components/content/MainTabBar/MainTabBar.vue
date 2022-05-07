<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="green">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/cart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
const TabBar = () => import("../../common/tabbar/TabBar.vue"); //懒加载
const TabBarItem = () => import("../../common/tabbar/TabBarItem.vue"); //懒加载
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>