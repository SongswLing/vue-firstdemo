<template>
    <div class='box'>
        <div class="cases">
            <p>已选</p>
            <p>1件</p>
            <van-icon name="arrow"  class="icons" size="15"/>
        </div>
        <div class="size">
            <p>规格</p>
            <p>盒装</p>
            <van-icon name="arrow" class="icons" size="15"/>
        </div>
        <div class="site" @click='tosite'>
            <p>送至</p>
            <p>{{ siteinfo[0].site || "暂无地址"}}  </p>
            <van-icon name="arrow" class="icons" size="15"/>
        </div>
        <div class="botom">
            <div class="more">
                <div class="single">
                    <van-icon name="passed" size="15"/>
                    <p>正品保障</p>
                </div>
                <div class="single">
                    <van-icon name="passed" size="15"/>
                    <p>商品保管</p>
                </div>
                <div class="single">
                    <van-icon name="passed" size="15"/>
                    <p>7天无理由退货</p>
                </div>
            </div>
            <van-icon name="arrow" class="icons" size="15"/>
        </div>
    </div>
</template>
    
<script>
import {mapGetters} from 'vuex'
import{siteinfo} from '../../public/data/goods'
export default {
    // props:['site'],
    name:"products-lists",
    data() {
        return{
            formse:[],
            siteinfo
        }
    },
    mounted(){
        console.log(this.siteinfo);
    },
    computed:{
        // ...mapGetters(['gosite']),
    //     gosite(){
    //         console.log();
    //     }
    // },
    },
    methods: {
        tosite(){
            this.$router.push('/siteEditor').catch(err=>{});
        },
    },
    
}
</script>
    
<style lang='less' scoped>
    .box{
        width: 355px;
        padding: 0px 10px;
        margin: 10px 0px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        .cases,.size,.site,.botom{
            border-bottom: 1px solid rgb(190, 183, 183);
            position: relative;
            display: flex;
            height: 40px;
            p{
                font-size: 13px;
            }
            :nth-child(1){
                color: rgb(158, 148, 148);
            }
            :nth-child(2){
                color: rgb(0, 0, 0);
                font-weight: bold;
                margin-left: 20px;
            }
            .icons{
                position:absolute;
                right: 0px;
                line-height:40px;
            }
        }
        .botom{
            border-bottom: none;
            .more{
                width: 290px;
                display: flex;
                justify-content:space-between;

                .single{
                    display: flex;
                    align-items: center;
                    p{
                        font-size: 12px;
                        margin: 0px 5px;
                    }
                }
                :nth-child(2){
                    margin-left: 0px;
                }
            }
            .icons{
                font-weight: normal;
            }
        }
        
    }
</style>