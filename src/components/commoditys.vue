<template>
<div class="combox">
    <div class='commoditys' v-for='(item,index) in comdlists' :key="index">
        <img src="../assets/home/commoditys/01(1).png" alt="" class='img-first' @click="toProducts(index)">
        <div class="comd-font"  >
            {{item.comdfont}}
        </div>
        <div class="box">
            <div class="new-price">{{item.newprice}}</div>
            <div class="old-price">{{item.old}}</div>
            <div class="add-price">
                <img src="../assets/home/commoditys/组 4.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>
    
<script>
export default {
    name:'commoditys',
    props:['comdlists'],
    methods: {
        toProducts(index){
            this.$router.push({name:'products',params:{info:this.comdlists[index]}})
            // console.log(index);
        }
    }
}
</script>
    
<style lang='less' scoped>
.combox{
    display: flex;
    flex-wrap: wrap;
    .commoditys{
        width: 40%;
        background-color:#fff;
        // border: 1px solid #000;
        border-radius:10px;
        padding: 10px 10px;
        display: flex;
        // flex-flow: column;
        flex-wrap: wrap;
        // margin-bottom: 5px;
        margin: 5px 8px;
        .img-first{
            margin-bottom: 5px;
            width: 150px;
            height: 150px;
        }
        .comd-font{
            font-size: 12px;
            margin-bottom: 5px;
            margin-top: 5px;
            width: 150px;
            height: 39px;
        }
        .box{
            display: flex;

            .new-price{
            color: red;
            }
            .old-price{
                font-size:12px;
                transform: translate(10px,8px);
                text-decoration: line-through;
            }
            .add-price img{
                transform: translate(60px,10px);
            }
        }
        
    }
}
    
</style>