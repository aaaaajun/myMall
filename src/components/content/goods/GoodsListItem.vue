<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collection">剩余{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  width: 48%;
  height: 340px;
  // padding-bottom: 40px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 298px;
    border-radius: 10px;
  }
  .goods-info {
    position: absolute;
    // bottom: 10px;
    font-size: 20px;
    text-align: center;
    p {
      width: 180px;
      font-size: 16px;
      padding: 5px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price {
      font-size: 14px;
      color: deeppink;
    }
    .collection {
      font-size: 14px;
      line-height: 14px;
    }
  }
}
</style>
