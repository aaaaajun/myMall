<template>
  <div class="goods">
    <GoodsListItem
      v-for="item in goods"
      :key="item.title"
      :goodsItem="item"
    ></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
}
</style>>