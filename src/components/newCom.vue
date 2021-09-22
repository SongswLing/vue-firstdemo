<template>
    <div>
        <van-nav-bar title="标题" left-arrow @click-left='tohome()'>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <shoplists :shoplists="shoplists"></shoplists>
    </div>
</template>
    
<script>
import shoplists from './shoplists.vue'
export default {
    name:'newCom',
    data() {
        return {
            shoplists:[
                {
                    name:'大家佛无阿和偶偶好地方及登记身份',
                    newprice:39.6,
                    oldprice:49.9
                },
                {
                    name:'大家佛无阿和偶偶好地方及登记身份',
                    newprice:59.6,
                    oldprice:69.9
                },
                {
                    name:'大家佛无阿和偶偶好地方及登记身份',
                    newprice:19.6,
                    oldprice:29.9
                },
                {
                    name:'大家佛无阿和偶偶好地方及登记身份',
                    newprice:29.6,
                    oldprice:39.9
                },
                {
                    name:'大家佛无阿和偶偶好地方及登记身份',
                    newprice:59.6,
                    oldprice:69.9
                },{
                    name:'大家佛无阿和偶偶好地方及登记身份',
                    newprice:39.6,
                    oldprice:49.9
                }
            ]
        }
    },
    methods:{
        tohome(){
            this.$router.back();
        }
    },
    components:{ shoplists}
}
</script>
    
<style lang='less' scoped>
   /deep/ .van-nav-bar{
       background: linear-gradient(to right, #E92836, #EE4761);
        .van-nav-bar__content{
            height:70px;
            color: #fff;
            .van-nav-bar__left, .van-nav-bar__right{
                top: 30px;
            }
            .van-nav-bar__title{
                margin-top:30px;
            }
        }
        .van-nav-bar__title{
            color: #fff;
            font-size: 18px;
        }
        .van-icon{
            color: #fff;
        }
    }
</style>