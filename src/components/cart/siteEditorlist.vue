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
        }
    },
    computed:{
        
    },
    mounted() {
        console.log(this.address);
        if(this.address){
            this.siteinfo.push()
        }else{
            this.$nextTick(()=>{
            let newsite={}
                newsite.name=this.address.name
                newsite.call=this.address.tel
                newsite.site=this.address.province+this.address.city+this.address.county
                newsite.checked=false
                newsite.id=this.siteinfo.length+1
            // if(newsite.id>this.siteinfo.length){
                // console.log("wu")
            
            console.log(this.siteinfo.length);
            this.siteinfo.push(newsite)
        })
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