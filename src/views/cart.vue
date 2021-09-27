<template>
  <div class='box-main'>
    <nor-bar class="norbar">购物车</nor-bar>
    <cart-shoplists></cart-shoplists>
    <van-submit-bar :price="pullice*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="$store.state.choose" @click='onchange()'>全选</van-checkbox>
    </van-submit-bar>
    <cart-title></cart-title>
    <commoditys></commoditys>
    <teb-bar></teb-bar>
  </div>
</template>
    
<script>
import tebBar from "./tebBar";
import norBar from "../components/norBar"
import cartShoplists from '../components/cart/cartShoplists';
import {mapState,mapMutations,mapGetters} from 'vuex'
import cartTitle from '../components/cart/cartTitle';
import commoditys from '../components/commoditys'
export default {
  components: { tebBar,norBar,cartShoplists ,cartTitle,commoditys},
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
.box-main{
  padding-bottom: 105px;
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
}

</style>