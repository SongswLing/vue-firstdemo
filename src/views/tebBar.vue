<template>
  <div class="box">
    <van-tabbar v-model="active" @change="onChange" route active-color="#E71B1B">
      <van-tabbar-item  to="/home">
       <!-- <router-link to="/home"> -->
       <template #icon="props">
        <img :src="props.active ? home.active : home.inactive" class="icon"/>
       </template>
        <span>首页</span>
       <!-- </router-link> -->
      </van-tabbar-item>

      <van-tabbar-item  to="/cals">
        <span>分类</span>
        <template #icon="props">
          <img :src="props.active ? cals.active : cals.inactive" class="icon" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item  to="/cart">
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? cart.active : cart.inactive" class="icon" />
        </template>
      </van-tabbar-item>
      
      <van-tabbar-item to="/info">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? info.active : info.inactive" class="icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      active: 0,
      home: {
        active: require("../assets/footer/on/homeon.png"),
        inactive: require("../assets/footer/down/homedown.png"),
      },
      cals: {
        active: require("../assets/footer/on/classon.png"),
        inactive: require("../assets/footer/down/classdown.png"),
      },
      cart: {
        active: require("../assets/footer/on/carton.png"),
        inactive: require("../assets/footer/down/cartdown.png"),
      },
      info: {
        active: require("../assets/footer/on/infoon.png"),
        inactive: require("../assets/footer/down/infodown.png"),
      },
    };
  },
  updated() {},
  methods: {
    onChange(index) {
      // console.log("index: ",index)
      this.active = index;
      // console.log("active:  ", this.active)
    },
  },
};
</script>
    
<style lang='less' scoped>
.box {
  z-index: 999;
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.active {
  color: rgb(231, 27, 27);
}
.icon{
  display:block;
  width: 25px; 
  height: 25px;
}
a {
  text-decoration: none;
  // color: #000 ;
}
</style>