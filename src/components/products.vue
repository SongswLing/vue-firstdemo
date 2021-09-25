<template>

    <div class='boxs'>
        
        <van-swipe @change="onChange">
        <van-swipe-item><img src="../assets/shopinfo/2.png" alt="" class='swipeimg'></van-swipe-item>
        <van-swipe-item><img src="../assets/shopinfo/2.png" alt="" class='swipeimg'></van-swipe-item>
        <van-swipe-item><img src="../assets/shopinfo/2.png" alt="" class='swipeimg'></van-swipe-item>
        <van-swipe-item><img src="../assets/shopinfo/2.png" alt="" class='swipeimg'></van-swipe-item>
        <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
        </van-swipe>
        <div class="left-btns">
            <img src="../assets/shopinfo/组 10.png" alt="" @click='goback'>
        </div>
        <div class="right-btns">
            <img src="../assets/shopinfo/组 10(2).png" alt="">
            <img src="../assets/shopinfo/组 10(1).png" alt="">
        </div>
   
        <div class="priceinfo">
            <div class="topcontent">
                <div class="newprice">¥{{shopinfo.newprice}}</div>
                <div class="oldprice">¥{{shopinfo.old}}</div>
                <div class="stock">库存28</div>
            </div>
            <div class="name">{{shopinfo.comdfont}}</div>
        </div>
        <productslists ></productslists>


        <van-goods-action>
            <van-goods-action-icon icon="shop-o" text="店铺" color="#ee0a24"/>
            <van-goods-action-icon icon="chat-o" text="客服" color="#888181" />
            <van-goods-action-icon icon="star-o" text="收藏" color="#888181" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addshop"/>
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        
    </div>
    
</template>
    
<script>
import {mapMutations} from 'vuex'
import productslists from '../components/products-lists'
export default {
    components:{productslists},
    name:'products',
    data() {
        return {
        current: 0,
        shopinfo:[],
        site:[]
        };
    },
    mounted() {
        // console.log(this.$route.params);
        this.shopinfo=this.$route.params.info;
        // this.site=JSON.parse(sessionStorage.getItem('site'))
        // console.log(this.site);
        // console.log(this.shopinfo.imgurl);
    },
    updated(){
        // console.log(this.$route);
        // this.site=this.$route.params.site;
        // console.log(this.site);
        
    },
    methods: {
        ...mapMutations(['onchange3']),
        onChange(index) {
        this.current = index;
        },
        goback(){
            this.$router.back()
        },
        addshop(){
            this.onchange3(this.shopinfo);
            // Toast.success('添加成功');
            this.$toast('添加成功');
            this.$router.push('/cart')
        }
    },
}
</script>
    
<style lang='less' scoped>
.boxs{
    position: relative;
    padding-bottom: 50px;
    .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
  .swipeimg{
      width: 375px;
    // width: 100%;
      height: 400px;
  }
  .custom-indicator[data-v-5b894b74]{
      bottom: 30px;
      right: 15px;
      border-radius: 10px;
      width: 25px;
      text-align: center;
  }
  .left-btns{
      position: absolute;
      top: 30px;
      left:10px;
    //   width: 360px;
    //   border: 1px solid #000;
    //   margin: 0 auto;
      img{
          width: 27px;
          height: 27px;
      }
  }
  .right-btns{
      position: absolute;
      top: 30px;
      right:10px;
    //   width: 360px;
    //   border: 1px solid #000;
      img{
          margin-left: 10px;
          width: 27px;
          height: 27px;
      }
  }
  .priceinfo{
      width: 355px;
      height: 50px;
      background-color: #fff;
      padding: 10px;
      font-family: "微软雅黑";
    .topcontent{
        display:flex;
        align-items: center;
        .newprice{
            font-size:20px;
            color: red;
        }
        .oldprice{
            font-size:15px;
            color: rgb(134, 130, 130);
            text-decoration: line-through;
            margin-left:8px
        }
        .stock{
            font-size:15px;
            color: rgb(129, 121, 121);
            margin-left: 200px;
        }
    }
    .name{
        font-size:15px;
        margin-top: 6px;
        font-weight: bold;
    }
  }
}
    
</style>