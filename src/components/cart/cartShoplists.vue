<template>
    <div>
        <div class="comlists">
            <div class="main" v-for="(item,index) in cart" :key="index">
                <van-checkbox v-model="item.checked" checked-color="#ee0a24" class="chbox" @click='onchecked(index)'></van-checkbox>
                <img src="../../assets//cals/组 6.png" alt="" @click="toProducts(index)">
                <div class="fonts" @click="toProducts(index)">{{item.fonts}}</div>
                <div class="price" @click="toProducts(index)">¥{{item.price}}</div>
                <div class="stepper">
                    <van-stepper v-model="item.conut" theme="round" button-size="22"  integer  @change="onChange($event)"/>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import {mapState,mapMutations} from 'vuex'
// import {cart} from '../../../public/data/goods'
export default {
    name:'cartShoplists',
    data() {
        
        return{
            // checked: true,
            // value:1,
            // cart
        }
    },
    mounted(){
        // console.log(this.cart[1].fonts);
    },
    methods: {
        ...mapMutations(['onchange2']),
        onChange(e){
            // console.log(e);
            // console.log(this.cart[0].conut)
        },
        onchecked(index){
            // console.log(index)
            this.onchange2(index)
        },
        toProducts(index){
            this.$router.push({
                path:`/products/${index}`
            })
        }
    },
    computed:{
        ...mapState(['cart'])
    }
}
</script>
    
<style lang='less' scoped>
    .comlists{
        width: 355px;
        background-color: #fff;
        margin: 10px auto;
        border-radius: 5px;
        .main{
            // border: 1px solid #000;
            // margin: 10px;
            padding: 15px;
            height: 85px;
            // display: flex;
            .chbox{
                float: left;
                margin: 30px 10px 20px 0px;
                // display: block;     
            }
            // float: left;
            img{
                float: left;
                margin-right: 10px;
            }
            .fonts{
                font-size: 15px;
                // margin-left: 5px;
                margin-bottom: 5px;
            }
            .price{
                color: red;
                font-size: 20px;
                margin-bottom: 10px;

            }
        }
        .stepper{
            border: 1px solid rgb(175, 171, 171);
            width: 100px;
            // box-sizing: content-box;
            box-sizing: border-box;
            border-radius: 15px;
            padding: 0 auto;
            float: right;
            transform: translateY(-18px);
             /deep/.van-stepper{
                margin:2px 2px 2px 4px;
                // margin: 2px;
                
            }
            /deep/ .van-stepper--round .van-stepper__minus
                {
                    // background-color: rgb(121, 113, 113);
                    color: #000000;
                    border: 0.02667rem solid #747373;
                }
                /deep/ .van-stepper--round .van-stepper__plus{
                    color: #000000;
                    background-color:#dad6d6;
                }
                /deep/.van-stepper__input{
                    width: 42px;
                }
        }
        
    }
</style>