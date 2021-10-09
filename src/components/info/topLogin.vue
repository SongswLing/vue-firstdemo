<template>
    <div class="box">
        <div class="logins">
            <div class="images"><img src="../../assets/info/组 2.png" alt=""></div>
            <div class="loginfont" @click="gosignin"><span>{{$store.state.username || "登录/注册"}}</span><van-icon name="arrow" color="#fff"/></div>
            <div class="bell"><van-icon name="bell" color="#fff" class="incos"/></div>
        </div>
        <div class="lists">
            <div class="list">
                <p>一</p>
                <p>积分</p>
            </div>
            <div class="list">
                <p>一</p>
                <p>关注商品</p>
            </div>
            <div class="list">
                <p>一</p>
                <p>收藏夹</p>
            </div>
            <div class="list">
                <p>一</p>
                <p>足迹</p>
            </div>
        </div>
    </div>
</template>
    
<script>
import {mapState} from 'vuex'
export default {
    name:'topLogin',
    // props:['username'],
    methods: {
        gosignin(){
            this.$router.push('/signIn')
        }
    },
    created(){
        console.log(this.username);
    }
}
</script>
    
<style lang='less' scoped>
    .box{
        width: 100%;
        height: 200px;
        background: linear-gradient(to right, #E92836, #EE4761);
        .logins{
            // border: 1px solid #000;
            transform: translateY(40px);
            display: flex;
            align-items:center;
            padding: 10px 20px;
            position: relative;
            .images{
                width: 40px;
                height: 40px;
                transform: scale(1.4);
                // border: 1px solid #000;
            }
            .loginfont{
                font-size: 14px;
                margin-left: 17px;
                color: #fff;
            }
            .bell{
                width: 18px;
                height: 18px;
                .incos{
                    position: absolute;
                    right: 20px;
                    top: 17px;
                }
            }
        }
        .lists{
            // border: 1px solid #000;
            display: flex;
            transform:translateY(60px);
            height: 50px;
            align-items: center;
            justify-content:space-around;
            .list{
                // border: 1px solid #000;
                font-size: 20px;
                padding: 0;
                text-align: center;
            }
            p:nth-child(1){
                font-size: 17px;
                margin: 0;
                font-weight: bold;
                color:#fff;
            }
            p:nth-child(2){
                margin: 0;
                font-size: 12px;
                color:rgba(214, 211, 211, 0.726);
                
            }
        }
    }
</style>