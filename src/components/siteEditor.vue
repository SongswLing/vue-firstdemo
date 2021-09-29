<template>
    <div>
        <norBar>
            <template slot='left-icon' >
                <van-icon name="arrow-left" color="#fff" @click="goback"/>
            </template>
            地址编辑
        </norBar>


         <div class="main" v-for="(item,index) in siteinfo" :key="index" >
                <van-checkbox v-model="item.checked" checked-color="#ee0a24" class="chbox" @click="change(index+1)"></van-checkbox>
                <div class="confont">
                    <div class="top">
                        <div class="name" >{{item.name}}</div>
                        <div class="call" >{{item.call}}</div>
                        <div v-if="item.id==1">默认</div>
                    </div>
                    <div class="bomsite">{{item.site}}</div>
                </div>
                <van-icon name="edit" class="icons"/>
            </div>
        <!-- <siteEditorlist :address="address"></siteEditorlist> -->
        <div class="addsite">
                <van-button type="primary" block class="child" @click='goaddress'>新增地址</van-button>
        </div>
    </div>
</template>
    
<script>
import norBar from "../components/norBar"
import siteEditorlist from '../components/cart/siteEditorlist'
import {siteinfo} from '../../public/data/goods'

import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    name:'siteEditor',
    components:{norBar,siteEditorlist}, 
    data() {
    return {
        // gosite:[]
    // ...mapState['site'],
    // address:[]
            siteinfo,
            siteinfoadd:[]


     
  }
  },
  computed:{
    //   ...mapGetters['gosite'],
  },
  mounted() {
      console.log(this.addsite);
      this.$nextTick(function(){
           this.siteinfoadd=this.$route.params.content
          console.log(this.siteinfo)
          console.log(this.siteinfoadd)
            let addnewsiteinfo={}
                addnewsiteinfo.name=this.siteinfoadd.name
                addnewsiteinfo.call=this.siteinfoadd.tel
                addnewsiteinfo.site=this.siteinfoadd.province+this.siteinfoadd.city+this.siteinfoadd.county
                addnewsiteinfo.checked=false
                addnewsiteinfo.id=this.siteinfo.length+1
                this.siteinfo.push(addnewsiteinfo)
      })
         
        },
    
  methods: {
      goaddress(){
          this.$router.push('/addressEdit')
      },
     goback(){
        // this.$router.push({
        //     path:'/products/:index'
        // })
        this.$router.back()
     },
     change(index){
            // console.log(index);
            const newlists=this.siteinfo.filter((item)=>{
                return item.id !== index
            })
            newlists.forEach((item)=>{
                item.checked=false
            })
        }  
  },
}
</script>
    
<style lang='less' scoped>
.main{
        width: 335px;
        background-color:#fff;
        border-radius:5px;
        margin: 10px auto;
        padding:10px;
        display: flex;
        justify-content:space-between;
        .confont{
            width: 78%;
            // display: flex;
            line-height: 35px;
            // align-items: space-around;
            .top{
                display: flex;
                font-size: 18px;
                .call{
                    margin-left: 15px;
                }
            }
            .bomsite{
                font-size: 15px;
                font-weight: 200;
            }
        }
        .icons{
            line-height: 70px;
        }
    }
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