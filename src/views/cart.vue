<template>
  <div class='box-main'>
    <nor-bar class="norbar">购物车</nor-bar>
    <cart-shoplists></cart-shoplists>
    <van-submit-bar :price="pullice*100" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="$store.state.choose" @click='onchange()'>全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
    <cart-title></cart-title>
    <commoditys :comdlists='comdlists'></commoditys>
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
      comdlists:[
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈1',
          newprice:13.90,
          old:10.90,
          id:0,
        },
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈2',
          newprice:10.90,
          old:11.90,
          id:1
        },
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈3',
          newprice:11.90,
          old:12.90,
          id:2
        },
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈4',
          newprice:12.90,
          old:13.90,
          id:3
        },
      ]
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