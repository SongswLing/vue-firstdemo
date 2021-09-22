<template>
  <div>
    <nor-bar class="norbar">购物车</nor-bar>
    <cart-shoplists></cart-shoplists>
    <van-submit-bar :price="pullice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="$store.state.choose" @click='onchange()'>全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
    <teb-bar></teb-bar>
  </div>
</template>
    
<script>
import tebBar from "./tebBar";
import norBar from "../components/norBar"
import cartShoplists from '../components/cart/cartShoplists';
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  components: { tebBar,norBar,cartShoplists },
  name: "cart",
  data() {
    return{
      
    }
  },
  computed: {
    ...mapGetters(['pullice'])
  },
  methods: {
    ...mapMutations(['onchange1']),
    onSubmit(){

    },
    onchange(){
      this.onchange1(this.$store.state.choose)
    }
  }
};
</script>
    
<style lang='less' scoped>
.norbar{
  color: #fff;
}
 /deep/.van-submit-bar{
  bottom: 50px;
  .van-checkbox__icon--checked .van-icon{
    background-color: red;
    border-color: red;
  }
}
</style>