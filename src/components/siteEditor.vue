<template>
    <div>
        <norBar>
            <template slot='left-icon' >
                <van-icon name="arrow-left" color="#fff" @click="goback"/>
            </template>
            地址编辑
        </norBar>
        <siteEditorlist :address="address"></siteEditorlist>
        <div class="addsite">
                <van-button type="primary" block class="child" @click='goaddress'>新增地址</van-button>
        </div>
    </div>
</template>
    
<script>
import norBar from "../components/norBar"
import siteEditorlist from '../components/cart/siteEditorlist'
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    name:'siteEditor',
    components:{norBar,siteEditorlist}, 
    data() {
    return {
        // gosite:[]
    // ...mapState['site'],
    address:[]
     
  }
  },
  computed:{
    //   ...mapGetters['gosite'],
  },
  mounted() {
    //   console.log(gosite);
          this.address=this.$route.params.content
          console.log(this.address)
    },
  methods: {
      goaddress(){
          this.$router.push('/addressEdit')
      },
     goback(){
        this.$router.back()
     }
  },
}
</script>
    
<style lang='less' scoped>
    .addsite{
        position: fixed;
        bottom: 0;
        width: 100%;
        // border: 1px solid #000;
        background-color:#fff;
        .child{
            width: 98%;
            margin: 0 auto;
            border-radius: 20px;
            background-color:rgb(233, 70, 70);
        }
        .van-button--primary{
            border: 0.02667rem solid rgb(233, 70, 70);

        }
    }
</style>