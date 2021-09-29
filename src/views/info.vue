<template>
  <div class="box-main">
    <top-login></top-login>
    <my-order>
      <template slot="left">我的订单</template>
      <template slot="right">全部订单<van-icon name="arrow" color="#918A8A"/></template>
      <template slot="img1">
            <img src="../assets/info/待付款.png" alt="">
      </template>
      <template slot="fonts1">代付款</template>
      <template slot="img2">
            <img src="../assets/info/待发货 (2).png" alt="">
      </template>
      <template slot="fonts2">待发货</template>
      <template slot="img3">
            <img src="../assets/info/待发货.png" alt="">
      </template>
      <template slot="fonts3">待收货</template>
      <template slot="img4">
            <img src="../assets/info/待评价 (1).png" alt="">
      </template>
      <template slot="fonts4">待评价</template>
      <template slot="img5">
            <img src="../assets/info/退款.png" alt="">
      </template>
      <template slot="fonts5">退款</template>
    </my-order>
    <my-order>
      <template slot="left">我的服务</template>
      <!-- <template slot="right">全部订单<van-icon name="arrow" color="#918A8A"/></template> -->

      <template slot="img1">
            <img src="../assets/info/个人资料 (1).png" alt="">
      </template>
      <template slot="fonts1">个人资料</template>
      <template slot="img2">
            <img src="../assets/info/我的地址.png" alt="">
      </template>
      <template slot="fonts2">我的地址</template>
      <template slot="img3">
            <img src="../assets/info/联系客服.png" alt="">
      </template>
      <template slot="fonts3">联系客服</template>
      <template slot="img4">
            <img src="../assets/info/问题.png" alt="">
      </template>
      <template slot="fonts4">问题</template>
      <!-- <template slot="img5">
            <img src="../assets/info/退款.png" alt="">
      </template>
      <template slot="fonts5">退款</template> -->
    </my-order>
    <cart-title class="commod"></cart-title>
    <commoditys class="commod"></commoditys>
    <teb-bar></teb-bar>
  </div>
</template>
    
<script>
import tebBar from "./tebBar";
import topLogin from '../components/info/topLogin'
import myOrder from '../components/info/myOrder'
import cartTitle from '../components/cart/cartTitle';
import commoditys from '../components/commoditys'
import {mapState,mapMutations} from 'vuex'
export default {
  components: { tebBar,topLogin,myOrder,cartTitle,commoditys},
  name: "info",
  computed:{
        
  },
  methods: {
    

  }
};
</script>
    
<style lang='less' scoped>
.box-main{
  padding-bottom: 25px;
  .commod{
    transform:translateY(-30px);
  }
}
</style>