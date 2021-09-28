<template>
    <div class="box">
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
    </div>
</template>
    
<script>
import {mapMutations,mapGetters} from 'vuex'
import {siteinfo} from '../../../public/data/goods'
export default {
    name:'siteEditorlist',
    props:['address'],
    data(){
        return{
            siteinfo,
            newsite:this.address
        }
    },
    computed:{
        
    },
    mounted() {
        console.log(this.newsite)
            let addnewsiteinfo={}
                addnewsiteinfo.name=this.newsite.name
                addnewsiteinfo.call=this.newsite.tel
                addnewsiteinfo.site=this.newsite.province+this.newsite.city+this.newsite.county
                addnewsiteinfo.checked=false
                addnewsiteinfo.id=this.siteinfo.length+1
            // if(newsite.id>this.siteinfo.length){
                // console.log("wu")
            
            console.log(addnewsiteinfo);
            if(addnewsiteinfo.name!==undefined){
            this.siteinfo.push(addnewsiteinfo)
            }
        },
    methods: {
        // ...mapMutations(['onchange5']),
        change(index){
            // console.log(index);
            const newlists=this.siteinfo.filter((item)=>{
                return item.id !== index
            })
            newlists.forEach((item)=>{
                item.checked=false
            })
        }   
    }
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
    
</style>