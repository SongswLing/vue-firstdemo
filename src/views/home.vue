<template>
  <div class="boxBig">
    <teb-bar></teb-bar>
    <swiper :images="images" class="swipers"> </swiper>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" class="searchs" shape="round" @click="toSearch()">
            <template #left>
                <img src="../assets/home/top/组 5@2x.png" alt="" class="left-img">
            </template>
            <template #action >
                <img src="../assets/home/top/消息 (3)@2x.png" alt="" class="right-img">
                <div class="right-font">消息</div>
            </template>
    </van-search>
    <cateLists></cateLists>
    <imgLists></imgLists>
    <recommendLists></recommendLists>
    <message></message>
    <recommend-font></recommend-font>
    <commoditys></commoditys>
  </div>
</template>
    
<script>
import tebBar from "./tebBar";
import swiper from "../components/swipe";
import cateLists from '../components/cateLists'
import imgLists from '../components/imgLists'
import recommendLists from '../components/recommendLists'
import message from '../components/message'
import recommendFont from '../components/recommendFont'
import commoditys from '../components/commoditys'
export default {
  components: { tebBar, swiper,cateLists,imgLists,recommendLists ,message,recommendFont,commoditys},
  name: "home",
  data() {
    return {
      value:'',
      images: [
        require("../assets/home/swipers/swiper.png"),
        require("../assets/home/swipers/swiper.png"),
        require("../assets/home/swipers/swiper.png"),
        require("../assets/home/swipers/swiper.png"),
      ],
      comdlists:[
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈',
          newprice:9.90,
          old:10.90,
        },
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈',
          newprice:10.90,
          old:11.90,
        },
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈',
          newprice:11.90,
          old:12.90,
        },
        {
          imgurl:'../assets/home/commoditys/01(1).png',
          comdfont:'哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈',
          newprice:12.90,
          old:13.90,
        },
      ]
    };
  },
  methods:{ 
        toSearch(){
            this.$router.push('/search')
        }
    }
};
</script>
    
<style lang='less' scoped>
.boxBig{
  padding-bottom: 55px;
}
.swipers{
  position: relative;
}
/deep/ .searchs{
  // position: fixed;
  //   top: 10px;
    // left:18.75px;
    // right: 18.75px;
    position: absolute;
    top: 6px;
    background-color:rgba(255, 255, 255, 0);
    width: 100%;
    // justify-content:center;
    border-radius: 20px;
    // margin: 0px auto;
    .van-search__content--round{
      border-radius: 6px;
      // width: 80px;
      height: 30px;
    }
    .left-img{
      width: 45px;
      height: 45px;
      margin-right:10px;
    }
    .van-search__action{
      padding: 0px 12px; 
      height: 34px;
      line-height: 15px;
      text-align: center;
      color: #fff;
      font-size: 12px;
    .right-img{
      width: 18px;
    }
}}
/deep/ .van-swipe__indicator{
      border-radius:0px;
      width: 10px;
      height: 3px;
    }
</style>