<template>
  <div class='box'>
    
    <teb-bar></teb-bar>
    <top-bar></top-bar>
    <div class='main'>
      <!-- <calsLists class='left-shop'></calsLists> -->
    <div class="lists">
      <ul>
        <li><router-link to="/cals" :class="$route.path=='/cals' ? 'active':'' ">新品上架</router-link></li>
        <li><router-link to="/cals/drink" :class="$route.path=='/cals/drink' ? 'active':'' ">饮料饮品</router-link></li>
        <li><router-link to="">酒类商城</router-link></li>
        <li><router-link to="">休闲零食</router-link></li>
        <li><router-link to="">日用洗化</router-link></li>
        <li><router-link to="">粮油干货</router-link></li>
        <li><router-link to="">百货商城</router-link></li>
      </ul>
    </div>

    <router-view class='right-shop'></router-view>
    </div>
    
    
  </div>
</template>
    
<script>
import tebBar from "./tebBar";
import topBar from '../components/cals/topbar'
import calsLists from '../components/cals/calsLists'
export default {
  components: { tebBar,topBar,calsLists },
  name: "cals",
};
</script>
    
<style lang='less' scoped>
.main{
  display: flex;
  .left-shop{
    flex:0.5;
  }
  .right-shop{
    flex: 2;
  }
}
.lists{
      // border: 1px solid #000;
      width: 80px;
      height: 580px;
      background-color: #fff;
      margin-top: 10px;

      ul{
        /* margin-top: 10px; */
        // border: 1px solid #000;
        li{
          height: 45px; 
          width: 100%;
          line-height: 45px;
          text-align: center;
          // border: 1px solid #000;
          font-size: 12px;
          // color: #000;
           a{
            line-height:45px;
            display: block;
            color: #000;
            // border-radius: 0px 0px 5px 5px;
          }
          
        }
      }
    }
    .active{
      color: red;
      background-color:#f1f1f1;
    }
    .active::before{
      content:'';
      display:inline-block;
        width: 2px;
        height: 10px;
        border: 1px solid rgb(255, 0, 0);
        background-color: red;
        transform: translate(-6px,2px);
    }
</style>