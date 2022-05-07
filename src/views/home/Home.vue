<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物商场</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Recommend :recommends="recommends"></Recommend>
    <Feature></Feature>
    <TabControl
      :titles="titles"
      @tabClick="tabClick"
      class="tab-control"
    ></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>
  </div>
</template>

<script>
// 引入各个路由的子组件
import HomeSwiper from "./childComponents/HomeSwiper.vue";
import Recommend from "./childComponents/Recommend.vue";
import Feature from "./childComponents/Feature.vue";
// 引入公共组件
import TabControl from "components/content/tabControl/TabControl.vue";
import NavBar from "../../components/common/navbar/NavBar.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
// 引入axios的封装
import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    // 请求home里面的数据
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品里面的信息
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    /**
     * 网络请求的方法
     */
    // 1.请求多个数据
    getHomeMultidata() {
      getHomeMultidata()
        .then((result) => {
          // console.log(result);
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 2.请求商品的信息
    getHomeGoods(type) {
      // 对象两种方法获取属性值 [] and .
      // 因为这里type是变量所以要用[],如果是.的话就是写死了。.的作用是直接使用对象中的key
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>