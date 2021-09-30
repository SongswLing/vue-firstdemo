<template>
    <div class="box">
        <norBar>
            <template slot='left-icon' >
                <van-icon name="arrow-left" color="#fff" @click="goback"/>
            </template>
            全部订单
            <template slot='right-icon' >
                <van-icon name="search" color="#fff"/>
            </template>
        </norBar>

        <van-tabs v-model="active">
            <van-tab title="全部订单">内容 1</van-tab>
            <van-tab title="待支付">内容 2</van-tab>
            <van-tab title="待收货">内容 3</van-tab>
            <van-tab title="已完成">内容 4</van-tab>
            <van-tab title="已取消">内容 5</van-tab>
        </van-tabs>
    </div>
</template>
    
<script>
import norBar from "../../components/norBar.vue"
export default {
    name:'myOrderlists',
    data() {
        return {
        active:0,
        };
    },
    components: {norBar},
    methods: {
        goback(){
            this.$router.push('/info')
        }
    }
}
</script>
    
<style lang='less' scoped>
     /deep/.van-tabs__wrap{
        width: 100%;
        height: 30px;
        // border: 1px solid #000;
        transform: translateY(-28px);
        .van-tab__text{
            font-size: 12px;
        }
        .van-tabs__line{
            width: 20px;
        }
    }
    /deep/.van-tabs__content{
        transform: translateY(-28px);
    }
</style>