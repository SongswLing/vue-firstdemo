<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
    
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
    
<style lang='less' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
/deep/.van-swipe__track {
  height: 180px;
}
</style>