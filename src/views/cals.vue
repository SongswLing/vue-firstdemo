<template>
  <div class='box'>
    <teb-bar></teb-bar>
    <top-bar></top-bar>
    <div class='main'>
      <calsLists class='left-shop'></calsLists>
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
</style>