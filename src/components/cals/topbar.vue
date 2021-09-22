<template>
    <div>
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" class="searchs" shape="round" @click="toSearch()">
            <template #left>
                <div class="left-img">分类</div>
            </template>
            <template #action >
                <img src="../../assets/home/top/消息 (3)@2x.png" alt="" class="right-img">
                <div class="right-font">消息</div>
            </template>
        </van-search>
    </div>
</template>
    
<script>
export default {
    name:'topbar',
    data() {
        return{
            value:'',
        }
    },
    methods: {
        toSearch(){
            this.$router.push('/search')
        }
    }
}
</script>
    
<style lang='less' scoped>
    /deep/ .searchs{
  // position: fixed;
  //   top: 10px;
    // left:18.75px;
    // right: 18.75px;
    // position: absolute;
    // top: 6px;
    background: linear-gradient(to right, #E92836, #EE4761);
    height: 70px;
    width: 100%;
    // justify-content:center;
    // border-radius: 20px;
    // margin: 0px auto;
    .van-search__content--round{
      border-radius: 6px;
      // width: 80px;
      height: 30px;
      margin-top: 20px;
    }
    .left-img{
    //   width: 45px;
    //   height: 45px;
    font-size: 16px;
      margin-right:10px;
      color: #fff;
      margin-top: 20px;

    }
    .van-search__action{
      padding: 0px 12px; 
      height: 34px;
      line-height: 15px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      margin-top: 20px;
    .right-img{
      width: 18px;
    }
}}
</style>